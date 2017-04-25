import * as Q from "q";

declare function verifierFactory(options: verifierFactory.VerifierOptions): verifierFactory.Verifier;

declare namespace verifierFactory {
    export class Verifier {
        constructor(
            providerBaseUrl: string,
            pactUrls: string[],
            providerStatesUrl: string,
            providerStatesSetupUrl: string,
            pactBrokerUsername: string | undefined,
            pactBrokerPassword: string | undefined,
            timeout: number,
        );

        verify(): Q.Promise<void>;
    }

    export interface VerifierOptions {
        providerBaseUrl: string,
        pactUrls: string[],
        providerStatesUrl?: string,
        providerStatesSetupUrl?: string,
        pactBrokerUsername?: string,
        pactBrokerPassword?: string,
        timeout?: number,
    }
}

export = verifierFactory;
