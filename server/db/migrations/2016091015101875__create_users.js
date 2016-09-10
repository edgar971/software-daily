'use strict';

const Nodal = require('nodal');

class CreateUsers extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091015101875;
  }

  up() {

    return [
      this.createTable("users", [

        {"name":"email","type":"string","properties":{"unique":true}},
        {"name":"username","type":"string", "properties":{"unique":true}},
        {"name":"twitter","type":"string"},
        {"name":"password","type":"string"}
        ]
      )
    ];

  }

  down() {

    return [
      this.dropTable("users")
    ];

  }

}

module.exports = CreateUsers;
