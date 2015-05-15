import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'key',
    findKeys: function(){
        console.log("Keys (multiple) controller");
        this.store.find('key', 1).then(function(key){
            console.log("Hostname: "+key.get('node.hostname'));
        });


    }.on('init')
});
