import { Logger } from "winston";
import { inject, injectable } from "inversify";
import SYMBOLS from "../dependency-injection/Symbols";

@injectable()
export class RequestHandler {
    private log: Logger;
    constructor(
        @inject(SYMBOLS.Logger) log : Logger
    ) {
            this.log = log;
    }

    public callAPIs() {
        this.log.info('This will call APIs');
    }
}