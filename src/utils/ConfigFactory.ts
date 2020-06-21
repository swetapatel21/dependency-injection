export interface IConfig
{
    apis: IAPIs,
    logger: ILogger
}

export interface ILogger {
    level: string
}

export interface IAPIs {
    baseURL: string,
    endpoints: string[]
}