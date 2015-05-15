import Ember from 'ember';

export default Ember.View.extend({
    model: function(){
        return this.get('controller').get('model');
    }
});
