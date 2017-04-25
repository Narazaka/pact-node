declare class PactUtil {
    createArguments(args: {[name: string]: any}, mappings: {[name: string]: string}): string[];
}

declare const pactUtil: PactUtil;

export = pactUtil;
