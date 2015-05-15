import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['nodes','nodes/item'],
    itemController: 'nodes/item'
});
