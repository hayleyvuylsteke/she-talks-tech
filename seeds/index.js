const seedUsers = require('./user-seeds');
const seedBlogPosts = require('./blogpost-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedSite = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlogPosts();
    await seedComments();
    process.exit(0);
};

module.exports = seedSite
