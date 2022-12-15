interface ComponentArgs {
    selector: string,
    templateUrl?: string,
    styleUrls?: string[],
    template?: string,
    styles?: string[],
}

export function Component(args: ComponentArgs) {
    const {selector, templateUrl, styleUrls, template, styles} = args;
    return function (constructor: typeof HTMLElement) {
        customElements.define(selector, constructor)
    }
}