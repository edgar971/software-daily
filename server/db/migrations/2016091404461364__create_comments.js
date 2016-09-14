'use strict';

const Nodal = require('nodal');

class CreateComments extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091404461364;
  }

  up() {

    return [
      this.createTable("comments", [
          {"name":"post_id","type":"int"},
          {"name":"parent_id","type":"int"},
          {"name":"user_id","type":"int"},
          {"name":"body","type":"string"}
        ])
    ];

  }

  down() {

    return [
      this.dropTable("comments")
    ];

  }

}

module.exports = CreateComments;
