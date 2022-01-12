import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { getBar } from 'my-addon/test-support';

module('utils | getBar', function (hooks) {
  setupTest(hooks);

  test('getBar does what it should', function (assert) {
    let barName = 'moes' as never;
    assert.strictEqual(getBar(barName), 'moes');
  });
});
