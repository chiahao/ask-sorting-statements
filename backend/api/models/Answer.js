/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
_ = require('underscore');

module.exports = {

  attributes: {
    agree: {
      type: 'array',
      required: true
    },
    disagree: {
      type: 'array',
      required: true
    },
    neutral: {
      type: 'array',
      required: true
    }
  },

  stats: function(cb){
    Answer.find().exec(function(err, answers){
      if(err) return cb(err);
      var result = {};
      _.map(answers, function(e){
        var count = function(id, cat){
          if(!result[id]){
            result[id] = {agree:0, disagree:0, neutral:0};
          }
          result[id][cat] += 1;
        }
        _.map(e.agree, function(id){ return count(id, 'agree');});
        _.map(e.neutral, function(id){ return count(id, 'neutral');});
        _.map(e.disagree, function(id){ return count(id, 'disagree');});
      });
      cb(null, result);
    });
  }
};

