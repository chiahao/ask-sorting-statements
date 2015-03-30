describe('Answers', function(){
  it('should be empty', function(done){
    Answer.find().exec(function(err, answers){
      answers.length.should.eq(0);
      done();
    });
  });
});
