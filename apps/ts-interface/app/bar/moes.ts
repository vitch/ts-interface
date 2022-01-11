export class MoesBar {};

declare module 'my-addon/bar/-core' {
    interface BarRegistry {
        ['moes']: MoesBar;
    }
}