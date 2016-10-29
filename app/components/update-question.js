import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionFormBool: false,
  action: {
    updateQuestionFormAction(){
      this.set('updateQuestionFormBool', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionFormBool', false);
      this.sendAction('update', question, params);
    }
  }
});
