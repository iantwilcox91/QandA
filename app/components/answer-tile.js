import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addRating(){
      console.log("up");
    },
    subtractRating(){
      console.log("down");
    }
  }
});
