import Service from '@ember/service';

export default class FooBar extends Service{};

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'foo-bar': FooBar;
  }
}
