import { inject, injectable } from "inversify";
import SYMBOLS from "../dependency-injection/Symbols";
import { Logger } from "winston";
import Axios, { AxiosInstance } from 'axios';

@injectable()
export class AxiosClient {
    constructor (
        @inject(SYMBOLS.Logger) private logger: Logger
    ) {
    }

    public async getUsers (url: string) {
        try {
            const axios: AxiosInstance = Axios.create({
                url: url
            });
    
            this.logger.debug(`Fetching request for ${url}`);
            const response = await axios.get<any>(url);
            this.logger.debug(`Fetched request for ${url}`);

            return response;
        } catch (error) {
            this.logger.error(`Request failed for ${url} with error ${error.message}`);
            throw new Error(`Request failed for ${url} with error ${error.message}`);
        }
    }
}