import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('string'),
  nodes: DS.hasMany('node', {async: true}),
  rules: DS.hasMany('rule', {async: true})
});
