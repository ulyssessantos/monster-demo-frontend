import Ember from 'ember';

export default Ember.Controller.extend({
  headlinerField: 'id',
  queryParams: ['headlinerField'],
  klass: Ember.computed.alias('model.modelObject.klass'),
  namedRelationships: Ember.computed('klass.relationshipNames', 'klass.relationshipsByName', function(){
    let relationshipNames = this.get('klass.relationshipNames.hasMany').concat(this.get('klass.relationshipNames.belongsTo'))
    return relationshipNames.map((relationshipName)=>{
      return this.get('klass.relationshipsByName').get(relationshipName)
    })
  })
})
