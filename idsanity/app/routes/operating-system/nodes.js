import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(){
        this.render('operating-system/nodes', {
            into: 'application'
        });

        this.render('nodes/list', {
            into: 'operating-system/nodes',
            outlet: 'node-list',
            controllerName: 'nodes/list'
        });
    },
    model: function(params){

        return this.controllerFor('nodes/list').set('model', this.store.find('node', {operating_system_id: params.os_id}));
    },

    setupController: function(controller, model){
        console.log("Happning now!");

        this.controllerFor('node-rule/list').set('model', this.store.findAll('node-rule'));
    }
});
