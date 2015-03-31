/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  submit: function(req, res){
    Answer.create(req.body).exec(function(err, answer){
      if(err){
        res.json({
            //@TODO: response error messages.
            status: 'fail'
          });
      }else{
        return res.json({
            createdAnswer: answer,
            status: 'success'
            });
        }
      });
  },
  stats: function (req, res) {
    Answer.stats(function(err, stats){
      if(err) return res.json({status:'fail'});
      return res.json({
        status: 'success',
        data: stats
      });
    });
  }

};

