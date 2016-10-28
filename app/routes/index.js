import Ember from 'ember';

var questions = [{
  id: 1,
  content: "Veruca Salt",
  author: "San Francisco",
  notes: "Estate"
  }, {
  id: 2,
  content: "Veruca Salt",
  author: "San Francisco",
  notes: "Estate"
  }, {
  id: 3,
  content: "Veruca Salt",
  author: "San Francisco",
  notes: "Estate"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
