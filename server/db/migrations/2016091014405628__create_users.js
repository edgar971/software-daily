'use strict';

const Nodal = require('nodal');

class CreateUsers extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091014405628;
  }

  up() {

    return [
      this.createTable("users", [{"name":"id","type":"int"},{"name":"username","type":"string"},{"name":"twitter","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("users")
    ];

  }

}

module.exports = CreateUsers;
