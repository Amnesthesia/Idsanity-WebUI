import DS from 'ember-data';

export default DS.Model.extend({
  node: DS.belongsTo('node'),
  rule: DS.belongsTo('rule', {async: true}),
  dateAdded: DS.attr('date'),
  enabled: DS.attr('boolean')
});
