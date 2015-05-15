import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find('nodeRule', params.node_rule_id);
    },

    renderTemplate: function(){
        this.render('node-rule/details', {
            into: 'application'
        });
    }
});
