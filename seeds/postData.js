const { Post } = require('../models');


const postdata = [
    {
        "postTitle": "Hungry",
        "postContent": "I need some food!",
        "userId": 1
    },
    {
        "postTitle": "Tech Idea",
        "postContent": "Here's a tech idea",
        "userId": 2
    },
    {
        "postTitle": "Project 2",
        "postContent": "Project 2 is going well!",
        "userId": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);


module.exports = seedPost;