'use strict';

const Nodal = require('nodal');

class Post extends Nodal.Model {}

Post.setDatabase(Nodal.require('db/main.js'));
Post.setSchema(Nodal.my.Schema.models.Post);

module.exports = Post;
