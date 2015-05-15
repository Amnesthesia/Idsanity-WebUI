import Ember from 'ember';

export default Ember.ObjectController.extend({
    content: [],
    findKeys: function(){
        console.log("Node (single) controller");
    }.on('init'),

    rules: function(){
        console.log("Trying to get rules");
        return this.model.get('nodes_rules');
    }.property('nodes_rules')


});
