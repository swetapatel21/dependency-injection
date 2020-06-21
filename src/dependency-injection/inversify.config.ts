import "reflect-metadata";

import { Container } from "inversify";
import { Logger } from "winston";
import SYMBOLS from "../dependency-injection/Symbols";
import { RequestHandler } from "../service/RequestHandler"
import { IConfig, IAPIs } from "../utils/ConfigFactory";
import { LoggerFactory } from "../utils/LoggerFactory";
import { AxiosClient } from "../service/AxiosClient";

let config: IConfig = require('../../config/config.json');

const container = new Container();

container.bind<RequestHandler>(SYMBOLS.RequestHandler).to(RequestHandler);

container.bind<Logger>(SYMBOLS.Logger).toDynamicValue ( () => {
    const factory = new LoggerFactory();
    return factory.create(config.logger.level);
});

container.bind<IAPIs>(SYMBOLS.APIConfig).toConstantValue(config.apis);

container.bind<AxiosClient>(SYMBOLS.AxiosClient).to(AxiosClient);

export { container };