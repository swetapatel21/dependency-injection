import { Logger, config } from "winston";
import { inject, injectable } from "inversify";
import SYMBOLS from "../dependency-injection/Symbols";
import { IAPIs } from "../utils/ConfigFactory";
import { AxiosClient } from "./AxiosClient";

@injectable()
export class RequestHandler {
    constructor(
        @inject(SYMBOLS.Logger) private logger : Logger,
        @inject(SYMBOLS.APIConfig) private config : IAPIs,
        @inject(SYMBOLS.AxiosClient) private client: AxiosClient
    ) {
    }

    public async callAPIs() {
        const promises: Promise<any> [] = [];
        for(const endpoint of this.config.endpoints) {
            promises.push(this.client.getUsers(`${this.config.baseURL}${endpoint}`));
        }

        const results = await Promise.all(promises);
        this.logger.debug("Logging results");
        this.logResults(results);
    }

    private logResults(results: any[]) {
        for(const result of results) {
            if(result.data && result.data.data instanceof Array) {
                this.logResults(result.data.data);
            } else {
                const value = result.data ? result.data.data : result;
                this.logger.info(`${value.id} : ${value.first_name}`);
            }
        }
    }
}