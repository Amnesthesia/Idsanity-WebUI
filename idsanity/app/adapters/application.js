import DS from "ember-data";
import Ember from "ember";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://127.0.0.1:9001',
    namespace: 'api',
    pathForType: function(type) {
        return Ember.String.underscore(type.pluralize());
    }
});


export default ApplicationAdapter;
