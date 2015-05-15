import DS from 'ember-data';

export default DS.Model.extend({
  key: DS.belongsTo('key'),
  operating_system: DS.belongsTo('operatingSystem'),
  hostname: DS.attr('string'),
  unique_identifier: DS.attr('string'),
  last_ip: DS.attr('string'),
  last_seen: DS.attr('date'),
  last_change: DS.attr('date'),
  current_rule_hash: DS.attr('string'),
  is_banned: DS.attr('boolean'),
  nodes_rules: DS.hasMany('NodeRule', { async: true })

});
