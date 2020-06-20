import "reflect-metadata";

import { Container } from "inversify";
import { Logger } from "winston";
import SYMBOLS from "../dependency-injection/Symbols";
import { RequestHandler } from "../repository/RequestHandler"
import { IConfig } from "../utils/ConfigFactory";
import { LoggerFactory } from "../utils/LoggerFactory";

let config: IConfig = require('../../config/config.json');

const container = new Container();

container.bind<RequestHandler>(SYMBOLS.RequestHandler).to(RequestHandler);

container.bind<Logger>(SYMBOLS.Logger).toDynamicValue ( () => {
    const factory = new LoggerFactory();
    return factory.create(config.logger.level);
});

export { container };