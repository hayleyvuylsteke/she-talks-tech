const User = require('./User')
const BlogPost = require('./BlogPost')

//model associations

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, BlogPost }

