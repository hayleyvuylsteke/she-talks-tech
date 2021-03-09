const User = require('./User')
const BlogPost = require('./BlogPost')
const Comment = require ('./Comment')

//model associations

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = { User, BlogPost, Comment }

