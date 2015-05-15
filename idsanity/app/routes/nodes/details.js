import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(){
        this.render('nodes/details', {
            into: 'application'
        });

        this.render('node-rule/list', {
            into: 'nodes/details',
            outlet: 'rule-list',
            controllerName: 'node-rule/list'
        });
    },
    model: function(params){
        console.log("Trying to load node with id " +params.node_id);
        this.node_id = params.node_id
        return this.controllerFor('nodes/details').set('model', this.store.find('node', params.node_id));
    },

    setupController: function(controller, model){
        console.log("Happning now!");

        this.controllerFor('node-rule/list').set('model', this.store.find('node-rule', {node_id: this.node_id}));
    }
});
