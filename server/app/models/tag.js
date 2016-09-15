'use strict';

const Nodal = require('nodal');

class Tag extends Nodal.Model {}

Tag.setDatabase(Nodal.require('db/main.js'));
Tag.setSchema(Nodal.my.Schema.models.Tag);

module.exports = Tag;
