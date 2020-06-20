
import winston = require('winston');
import { Logger, transports, format } from 'winston';

export interface ILoggerConfig {
    level: string;
}

export class LoggerFactory {
    create(config: string): Logger {
        const logger = winston.createLogger({
            level: config,
            transports: [
                new transports.Console({
                    format: format.combine(format.colorize(), format.simple()
                )})
            ]
          });
        
        return logger;
    }
}
