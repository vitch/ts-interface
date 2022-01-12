import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { getBar } from 'my-addon/test-support';

module('Integration | Component | demo-one', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DemoOne />`);
    assert.dom('h1').hasText('moes');
  });

  test('can access getBar', async function (assert) {
    // This is the line I'm hoping _should_ work but:
    // > TS2345: Argument of type 'string' is not assignable to parameter of type 'never'.
    // We do augment the `BarRegistry` in `app/bar/moes.ts` and the augmentation works in
    // the code of the demo-one component. But it doesn't work here although the contents
    // of the `app` directory should be `include`d...
    assert.ok(getBar('moes'));
  });
});
