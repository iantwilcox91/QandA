import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(post) {
    this.get('favorites').pushObject(post);
  }
});
