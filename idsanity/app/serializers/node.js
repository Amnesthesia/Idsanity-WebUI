import DS from 'ember-data';
import Ember from "ember";

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    keyForAttribute: function(attr) {
        return Ember.String.underscore(attr).toUpperCase();
    },
    attrs: {
        operatingSystem: { embedded: 'always' },
        key: {embedded: 'always'},
        nodes_rules: {serialize: "id"}
    }
});
