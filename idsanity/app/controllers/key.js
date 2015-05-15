import Ember from 'ember';

export default Ember.ObjectController.extend({
    findKeys: function(){
        console.log("Key (single) controller");
    }.on('init')
});
