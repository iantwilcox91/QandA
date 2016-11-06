import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  areNotesShowing: false,

  actions: {
    showNotes: function() {
      this.set('areNotesShowing', true);
    },
    hideNotes: function() {
      this.set('areNotesShowing', false);
    },
    addToFavorites(question) {
      this.get('favoriteList').add(question);
      console.log("added to fav");
    }
  }
});
