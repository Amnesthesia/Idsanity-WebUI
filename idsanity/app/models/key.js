import DS from 'ember-data';

export default DS.Model.extend({
  key: DS.attr('string'),
  date_added: DS.attr('date'),
  node: DS.belongsTo('node', {embedded: 'always'})
});
