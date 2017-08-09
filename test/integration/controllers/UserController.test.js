var request = require('supertest');

describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should redirect to /login?register_message=emailexist&email=test%40gmail.com&displayname=test', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '12', password: '123456' })
        .expect(200, done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 1', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '12', password: 'abcd' })
        .expect(400, done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 2', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '12', password: 'qwertyuiopasdfghjklzxcvbnm qwertyuiopasdfghjklzxcvbnm qwertyuiop' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 3', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '12', password: 'a    b' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 4', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '12', password: '' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 5', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: 'a', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 6', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: 'qwertyuiopasdfghjklzxcvbnm qwertyuiopasdfghjklzxcvbnm qwertyuiop', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 7', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: 'a  b', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 8', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.co', displayName: '', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 9', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'a@b.c', displayName: '12', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 10', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'qwertyuiopasdfghjkl@zxcvbnm.qwertyuiopasdfghjklzx', displayName: '12', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 11', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: 'abcdef', displayName: '12', password: '123456' })
        .expect(400,done);
    });
  });
});
describe('UserController', function() {
  describe('#registerUser()', function() {
    it('should show bad request 12', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({ email: '', displayName: '12', password: '123456' })
        .expect(400,done);
    });
  });
});