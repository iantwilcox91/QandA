import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    showNotes: function() {
      this.set('areNotesShowing', true);
    },
    hideNotes: function() {
      this.set('areNotesShowing', false);
    },
    delete(question) {
      if (confirm('Are you sure you want to remove this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
