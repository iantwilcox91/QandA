import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  updateQuestionFormBool: false,
  actions: {
    showNotes: function() {
      this.set('areNotesShowing', true);
    },
    hideNotes: function() {
      this.set('areNotesShowing', false);
    }
  }
});
