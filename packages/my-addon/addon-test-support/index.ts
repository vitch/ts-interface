import { BarRegistry } from 'my-addon/bar/-core';

export function getBar<K extends keyof BarRegistry>(name: K) {
    return name as BarRegistry[K];
}
