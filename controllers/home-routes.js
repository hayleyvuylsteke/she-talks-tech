//contains all user facing routes
const router = require('express').Router();

//importing modules and models
const sequelize = require('../config/connection');
const { BlogPost, User, Comment } = require('../models');

//homepage route
router.get('/', (req, res) => {
  BlogPost.findAll({
    attributes: [
      'id',
      'post_title',
      'post_content',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
//Single Post Route
router.get('/post/:id', (req, res) => {
  BlogPost.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_title',
      'post_content',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { post });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  
module.exports = router;
