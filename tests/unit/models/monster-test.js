import { moduleForModel, test } from 'ember-qunit';

moduleForModel('monster', 'Unit | Model | monster', {
  // Specify the other units that are required for this test.
  needs: ['model:team-membership']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
