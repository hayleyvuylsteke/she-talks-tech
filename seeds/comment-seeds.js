const { Comment } = require('../models');

const commentData = [{
        comment_text: "I am a comment",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Cool comment!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Python",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "Python",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "Cat Ipsom?",
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: "Yes it is",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: "Comment Comment Comment",
        user_id: 1,
        post_id: 2
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;