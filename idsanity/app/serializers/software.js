import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        name: DS.attr(),
        version: DS.attr()
    }
});
