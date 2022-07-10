const { User } = require('../models');


const userdata = [
    {
        "username": "Quinn",
        "password": "password123"
    },
    {
        "username": "Emma",
        "password": "password123"
    },
    {
        "username": "Lucy",
        "password": "password123"
    }
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});


module.exports = seedUser;