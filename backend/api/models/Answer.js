/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    agree: {
      type: 'json',
      required: true
    },
    disagree: {
      type: 'json',
      required: true
    },
    neutral: {
      type: 'json',
      required: true
    }
  }
};

