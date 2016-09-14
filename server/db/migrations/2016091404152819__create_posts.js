'use strict';

const Nodal = require('nodal');

class CreatePosts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091404152819;
  }

  up() {

    return [
      this.createTable("posts", [

        {"name":"title","type":"string"},
        {"name":"source","type":"string"},
        {"name":"user_id","type":"int"}

      ])
    ];

  }

  down() {

    return [
      this.dropTable("posts")
    ];

  }

}

module.exports = CreatePosts;
