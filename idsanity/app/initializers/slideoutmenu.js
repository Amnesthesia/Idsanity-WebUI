import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.$.UISlideout();
  Ember.$.UISlideout.populate([{nodes: 'Nodes'}, {rules: 'Rules'}])
}

export default {
  name: 'slideoutmenu',
  initialize: initialize
};
