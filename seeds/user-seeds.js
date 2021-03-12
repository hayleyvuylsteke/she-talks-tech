const { User } = require('../models');

const users = [{
    username: 'hayley_vuylsteke',
    email: 'hayleyvuylsteke@gmail.com',
    password: 'password'
},
{
    username: 'brynn_elaine',
    email: 'hayleyvuylsteke+brynn@gmail.com',
    password: 'password'
},
{
    username: 'charlie_jean',
    email: 'hayleyvuylsteke+charlie@gmail.com',
    password: 'password'
},
{
    username: 'roro',
    email: 'hayleyvuylsteke+roro@gmail.com',
    password: 'password'
},
{
    username: 'tech_girl',
    email: 'hayleyvuylsteke+tech@gmail.com',
    password: 'password'
}
]
const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;