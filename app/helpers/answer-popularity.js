import Ember from 'ember';

export function answerPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-down"></span>');
  }
  if(question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"></span>');
  }
  if(question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-hand-up"></span>');
  }
  if(question.get('answers').get('length') >= 6) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }

}

export default Ember.Helper.helper(answerPopularity);
