export class MoesBar {};

declare module 'ts-interface/bar/-core' {
    interface BarRegistry {
        ['moes']: MoesBar;
    }
}