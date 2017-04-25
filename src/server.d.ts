/// <reference types="node" />
import * as Q from "q";

declare function serverFactory(options: serverFactory.ServerOptions): serverFactory.Server;

declare namespace serverFactory {
    export interface ServerOptions {
        consumer: string;
        provider: string;
        port?: number;
        host?: string;
        ssl?: boolean;
        sslcert?: string;
        sslkey?: string;
        dir?: string;
        cors?: boolean;
        log?: string;
        spec?: number;
    }

    export class Server extends NodeJS.EventEmitter {
        constructor(
            port: number,
            host: string,
            dir: string,
            ssl: boolean,
            sslcert: string,
            sslkey: string,
            cors: boolean,
            log: string,
            spec: number,
            consumer: string,
            provider: string,
        );

        start(): Q.Promise<void>;
        stop(): Q.Promise<void>;
        delete(): Q.Promise<void>;
    }
}

export = serverFactory;
