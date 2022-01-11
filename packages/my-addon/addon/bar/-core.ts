

export function barFor<K extends keyof BarRegistry>(this: unknown, name: K): BarRegistry[K] {
    // Implementation not relevant for the types...
    return name as BarRegistry[K];
  }

  // A type registry for `Bar`s. Meant to be declaration-merged so
  // string lookups resolve to the correct type.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface BarRegistry {}
