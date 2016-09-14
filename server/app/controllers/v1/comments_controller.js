'use strict';

const Nodal = require('nodal');
const Comment = Nodal.require('app/models/comment.js');

class V1CommentsController extends Nodal.Controller {

  index() {

    Comment.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Comment.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Comment.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Comment.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Comment.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1CommentsController;
