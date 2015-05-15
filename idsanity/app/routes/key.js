import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(){
        this.render('key', {
            into: 'application',
            controller: this.controllerFor('keys')
        });
    }
});
