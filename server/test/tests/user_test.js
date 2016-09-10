'use strict';

const Nodal = require('nodal');

class UserTest extends Nodal.mocha.Test {

  /**
   *
   * @param expect
   */
  test(expect) {

    /**
     *
     */
    it('Should return an HTTP 200', done => {

      this.endpoint('/v1/users').get((status, headers, body, json) => {

        expect(status).to.equal(200);
        done();

      });

    });

    /**
     *
     */
    it('Should Create a New User', done => {

      //this.endpoint('/').post()

    });

  }

}

module.exports = UserTest;
