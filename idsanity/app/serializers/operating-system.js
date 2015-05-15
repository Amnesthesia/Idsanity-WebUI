import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    attrs: {
        nodes: { embedded: 'always' }
    }
});
