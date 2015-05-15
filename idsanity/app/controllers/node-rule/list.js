import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['node','node-rule/item'],
    itemController: 'node-rule/item',
    content: [],
    contentBinding: 'controllers.node.node_rules'
});
