import DS from 'ember-data';

export default DS.Model.extend({
  family: DS.attr('string'),
  info: DS.attr('string'),
  nodes: DS.hasMany('node', {async: true})
});
