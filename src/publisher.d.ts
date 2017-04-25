import * as Q from "q";

declare function publisherFactory(options: publisherFactory.PublisherOptions): publisherFactory.Publisher;

declare namespace publisherFactory {
    export class Publisher {
        constructor(
            pactBroker: string,
            pactUrls: string[],
            consumerVersion: string | number,
            pactBrokerUsername: string | undefined,
            pactBrokerPassword: string | undefined,
            tags: string[],
        );

        publish(): Q.Promise<string[]>;
    }

    export interface PublisherOptions {
        pactBroker: string;
        pactUrls: string[];
        consumerVersion: string | number;
        pactBrokerUsername?: string;
        pactBrokerPassword?: string;
        tags?: string[];
    }
}

export = publisherFactory;
