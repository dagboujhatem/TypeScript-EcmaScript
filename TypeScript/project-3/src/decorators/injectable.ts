interface InjectableArgs {
    providedIn?: string;
}

export function Injectable(args: InjectableArgs) {
    const { providedIn } = args;
    return function () {

    }
}