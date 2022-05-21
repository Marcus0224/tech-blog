const { Post } = require('../models');

const postdata = [
  {
    title: 'Career change ',

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 10
  },
  {
    title: ' The day I saw Will Smith slap Chris Rock ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 8
  },
  {
    title: 'The day they stormed the Nations capital.',

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: 'Thoughts of living in a broken home.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: 'Day 1 of my remote job hits different... here is why.',

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  },
  {
    title: 'Challenges of going through a Bootcamp.',

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: ' The day in the life of a Fullstack Developer.',

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: ' A reminder that we dont all start in the same place.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: ' I conquered today.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 9
  },
  {
    title: 'is Chivalry dead? or we in a new Generation.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 5
  },
  {
    title: 'Childhood trauma that haunt adults.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: ' Wish my parents showed me affection when I was little.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 10
  },
  {
    title: 'Russia attack on Ukraine.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 8
  },
  {
    title: 'My trip to italy .',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: ' What does it mean to channel Mamba Mentality.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title:
      ' Dear diary, today they created birth control for men... The game will never be the same again.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  },
  {
    title: ' Software developer vs Cuber security.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 6
  },
  {
    title: ' Did the titanic really sink or its just floating under water.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: ' A good title is the title of a successful book.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 6
  },
  {
    title: ' Last of a dying breed.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;