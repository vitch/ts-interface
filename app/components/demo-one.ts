import Component from '@glimmer/component';
import { inject as service} from '@ember/service';

interface DemoOneArgs {}

export default class DemoOne extends Component<DemoOneArgs> {
    // TypeScript autocompleted `'foo-bar'` for me here and errors if it's not specified
    @service('foo-bar') declare fooBarService: any;
}
