const { BlogPost } = require('../models');

const blogpostData = [{
    post_title: 'The gender gap is real',
    post_content: 'According to SheCodes, women curretly hold 25% of coding jobs and earn 30% less than their male counterparts. What is with that? Why do you think there is such a gap?',
    user_id: 1
},
{
    post_title: 'Calling all femme-coders',
    post_content: 'Thinking of starting up a networking initiative where women from the tech community connect on a regular basis. Would you be interested? How often would you want to meet up?',
    user_id: 2
},
{
    post_title: 'What languages do you work in?',
    post_content: 'I am feeling very comfortable with JavaScript. What other languages do you ladies work in? What would be a good next step for me?',
    user_id: 3
},
{
    post_title: 'Mew mew meow',
    post_content: 'asdflkjaertvlkjasntvkjn (sits on keyboard).Jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back.',
    user_id: 4
},
{
    post_title: 'Cake powder sweet roll',
    post_content: 'Caramels macaroon biscuit toffee chupa chups wafer. Wafer jujubes sesame snaps marzipan apple pie croissant candy chupa chups.',
    user_id: 5
},
{
    post_title: 'Butcher quinoa kombucha',
    post_content: 'Green juice cronut readymade distillery chartreuse synth keffiyeh food truck, authentic semiotics photo booth woke sartorial austin.',
    user_id: 2
}
]

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostData);

module.exports = seedBlogPosts;