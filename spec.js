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
  //it('GET /', function testSlash(done) {
  //  request(server)
  //    .get('/')
  //    .except(200, done);
  //});
  //it('404 everything else', function testPath(done) {
  //  request(server)
  //    .get('/foo/bar')
  //    .expect(404, done);
  //});
});
