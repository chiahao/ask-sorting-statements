describe('Answers', function(){
  it('should be empty', function(done){
    Answer.find().exec(function(err, answers){
      answers.length.should.eq(0);
      done();
    });
  });
  describe('#stats()', function(){
    before(function(done){
      var Barrels = require('barrels');
      var barrels = new Barrels();
      var fixtures = barrels.data;
      barrels.populate(['answer'], function(err){
        done();
      });
    });
    it('should return statsitic.', function(done){
      Answer.stats(function(err, stats){
        expected = {
          '1': { agree: 1, disagree: 0, neutral: 0 },
          '2': { agree: 1, disagree: 0, neutral: 0 },
          '3': { agree: 0, disagree: 0, neutral: 1 },
          '4': { agree: 0, disagree: 0, neutral: 1 },
          '5': { agree: 0, disagree: 1, neutral: 0 }
        }
        expected.should.deep.eq(stats);
        done();
      });
    });
  });
});
