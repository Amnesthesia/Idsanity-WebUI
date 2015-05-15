import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        software: { embedded: 'always' },
        nodes_rules: { embedded: 'always' }
    }
});
