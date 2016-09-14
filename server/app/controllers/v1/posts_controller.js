'use strict';

const Nodal = require('nodal');
const Post = Nodal.require('app/models/post.js');

class V1PostsController extends Nodal.Controller {

  index() {

    Post.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Post.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Post.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Post.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Post.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1PostsController;
