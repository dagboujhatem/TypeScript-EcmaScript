interface NgModuleArgs {
    declarations: any[],
    imports?: any[],
    providers?: any[],
    bootstrap?: any[],
    exports?: any[],
}

export function NgModule(args: NgModuleArgs) {
    const {declarations, providers, bootstrap, imports, exports} = args;
    return function (constructor: typeof HTMLElement) {
        // customElements.define(selector, constructor)
    }
}