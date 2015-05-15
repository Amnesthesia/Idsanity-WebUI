import DS from 'ember-data';

export default DS.Model.extend({
  software: DS.belongsTo('software'),
  raw: DS.attr('string'),
  date_added: DS.attr('date'),
  meta: DS.attr('string'),
  direction: DS.attr('string'),
  message: DS.attr('string'),
  group: DS.attr('string'),
  action: DS.attr('string'),
  classtype: DS.attr('string'),
  flowbits: DS.attr('string'),
  gid: DS.attr('number'),
  sid: DS.attr('number'),
  rev: DS.attr('number'),
  priority: DS.attr('number'),
  nodes_rules: DS.hasMany('nodeRule'),

  date_added_formatted: function(){
      var d = new Date(this.get('date_added'));

      return (1900+d.getYear()) + "." + d.getMonth() + "." + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
  }.property()
});
