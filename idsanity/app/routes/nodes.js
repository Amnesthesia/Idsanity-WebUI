import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params){
        console.log("Trying to load nodes into route");
        return this.store.findAll('node');
    }
});
