var request = require('supertest');
describe('loading express', function() {
  var app;
  beforeEach(function() {
    app = require('./app');
  });
  it('GET /', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('GET /user', function(done) {
    request(app)
      .get('/users')
      .expect(200, done);
  });
});
