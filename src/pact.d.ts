import * as Q from "q";
import serverFactory = require("./server");
import verifierFactory = require("./verifier");
import publisherFactory = require("./publisher");

export function logLevel(): string | number;
export function logLevel(value: string | number): void;
export function createServer(options: serverFactory.ServerOptions): serverFactory.Server;
export function listServers(): serverFactory.Server[];
export function removeAllServers(): Q.Promise<any[]>;
export function verifyPacts(options: verifierFactory.VerifierOptions): Q.Promise<void>;
export function publishPacts(options: publisherFactory.PublisherOptions): Q.Promise<string>;
