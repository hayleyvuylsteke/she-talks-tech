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
        'Created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 
  'user_id', 'created_at'],
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
        res.render('homepage', dbPostData[0].get({ plain: true }));
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Login route
router.get('/login', (req, res) => {
    res.render('login');
  });
  
  
module.exports = router;
