'use strict';

const Nodal = require('nodal');
const Post = Nodal.require('app/models/post.js');
const Relationships = Nodal.require('app/relationships.js');

/**
 *
 */
class V1PostsController extends Nodal.Controller {

  /**
   * Display all Posts
   */
  index() {

    Post.query()
      .where(this.params.query)
      .join('user')
      .join('comments')
      .end((err, models) => {

        this.respond(err || models,
          [
            'id',
            'title',
            'source',
            {user: ['id', 'username']},
            {comments: ['id']},
            'created_at',
            'updated_at'
          ]
        );


      });

  }

  /**
   * Show a single post based on the ID.
   */
  show() {

    Post.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  /**
   *
   */
  create() {

    Post.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  /**
   *
   */
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
