'use strict';

const Nodal = require('nodal');

class CreateTags extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091504391943;
  }

  up() {

    return [
      this.createTable("tags", [{"name":"text","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("tags")
    ];

  }

}

module.exports = CreateTags;
