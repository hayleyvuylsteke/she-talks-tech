const router = require('express').Router()
const { BlogPost, User } = require('../../models')

//Gets all blog posts
router.get('/', (req,res) => {
    BlogPost.findAll({
        attributes: ['id', 'post_title', 'post_content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBlogPostData => res.json(dbBlogPostData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;

//Get one blog post
router.get('/:id', (req, res) => {
    BlogPost.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_title', 'post_content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBlogPostData => {
        if (!dbBlogPostData) {
            res.status(404).json({ message: 'Sorry! No blog post was found.'})
            return
        }
        res.json(dbBlogPostData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(res)
    })
})

//Create a blog post
router.post('/', (req,res) => {
    BlogPost.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.body.user_id
    })
    .then(dbBlogPostData => res.json(dbBlogPostData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//Update a blog post
router.put('/:id', (req, res) => {
    BlogPost.update(
        {
            post_title: req.body.post_title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbBlogPostData => {
        if (!dbBlogPostData) {
            res.status(404).json({ message: 'Sorry! No blog post was found.'})
            return
        }
        res.json(dbBlogPostData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//Delete a blog post
router.delete('/:id', (req, res) => {
    BlogPost.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBlogPostData => {
        if (!dbBlogPostData) {
            res.status(404).json({ message: 'Sorry! No blog post was found.'})
            return
        }
        res.json(dbBlogPostData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})