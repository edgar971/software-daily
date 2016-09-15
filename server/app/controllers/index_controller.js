'use strict';

const Nodal = require('nodal');

class IndexController extends Nodal.Controller {

  get() {

    this.respond({message: 'Software Daily RESTFul API'});

  }

}

module.exports = IndexController;
