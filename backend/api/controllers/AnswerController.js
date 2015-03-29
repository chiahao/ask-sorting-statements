/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  submit: function(req, res){
    console.log(req);
    return res.json({
      status: 'success'
    });
  }
};

