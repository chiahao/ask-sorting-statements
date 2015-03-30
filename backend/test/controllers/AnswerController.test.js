var request = require('supertest');

describe('AnswerController', function(){
  describe('#submit()', function(){
    it('should notice client submited status.', function(done){
      request(sails.hooks.http.app)
        .post('/submit')
        .send({agree: [], neutral: [], disagree:[]})
        .expect(200);
      done();
    });
  });
});
