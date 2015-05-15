import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(){
        this.render('softwares/nodes', {
            into: 'application'
        });

        this.render('nodes/list', {
            into: 'softwares/nodes',
            outlet: 'node-list',
            controllerName: 'nodes/list'
        });
    },
    model: function(params){
        this.controllerFor('nodes/list').set('model', this.store.find('node', {software_id: params.software_id}));
        return this.store.find('software', params.software_id);
    }
});
