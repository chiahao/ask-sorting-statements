var request = require('supertest');
var should = require('chai').should();

describe('AnswerController', function(){
  describe('#submit()', function(){
    after(function(done){
      sails.once('hook:orm:reloaded', done);
      sails.emit('hook:orm:reload');
    });
    it('should return success if submiting successed.', function(done){
      request(sails.hooks.http.app)
        .post('/submit')
        .send({agree:[1], neutral:[], disagree:[]})
        .expect(200)
        .end(function (err, res) {
          res.body.status.should.eq('success');
          done();
        });
    });
  });
  describe('#stats()', function () {
    it('should return empty stats if no one submit else.', function(done){
      request(sails.hooks.http.app)
        .get('/stats')
        .expect(200)
        .end(function(err, res) {
          res.body.status.should.eq('success');
          res.body.data.should.deep.eq([]);
          done();
        })
    });
  });
});
