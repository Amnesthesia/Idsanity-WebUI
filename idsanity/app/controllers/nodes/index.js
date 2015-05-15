import Ember from 'ember';

export default Ember.Controller.extend({
    itemController: 'node',

    findKeys: function(){
        console.log("Nodes (multiple) controller");
        this.set('content', this.store.findAll('node').then(function(nodes){

            nodes.forEach(function(n){
                console.log(n.get('nodes_rules.rule.raw'));
            });
            return nodes;
        }));

    }.on('init'),

    something: function(){return "HAHA OK"}.property(),
    afterModel: function(){ console.log("Okay??"); },

    rules: function(){
        console.log("Trying to get rules");
        return this.get('nodes_rules').then(function(n){return n;});
    },
    nRules: function(){
        var rules = this.get('nodes_rules');
        console.log("WQQWEQWE");
        return rules.get('length');

    }.property('model.nodes_rules.@each.rule')
});
