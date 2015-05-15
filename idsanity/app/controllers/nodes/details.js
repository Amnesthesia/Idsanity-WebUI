import Ember from 'ember';

export default Ember.Controller.extend({
    g: function(){console.log(this.get('model'))}.on('init')
});
