const assert = require('assert');

describe('homepage', function() {
  it('should respond to GET', function(done) {
    superagent
      .get('http://localhost:8081')
      .end(function(res) {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
