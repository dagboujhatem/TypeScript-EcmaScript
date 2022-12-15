interface ModuleArgs {
    declarations: any[],
    imports?: any[],
    providers?: any[],
    bootstrap?: any[],
    exports?: any[],
}

export function Module(args: ModuleArgs) {
    const {declarations, providers, bootstrap, imports, exports} = args;
    return function (constructor: typeof HTMLElement) {
        // customElements.define(selector, constructor)
    }
}