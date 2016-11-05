import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addRating(answer){
      this.sendAction('upRating', answer);
    },
    subtractRating(answer){
      this.sendAction('downRating', answer);
    }
  }
});
