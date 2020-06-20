export interface IConfig
{
    apis: IAPIs,
    logger: ILogger
}

interface ILogger {
    level: string
}

interface IAPIs {
    baseURL: string,
    endpoints: IEndpoints
}

interface IEndpoints {
    singleUser: string,
    allUsers: string
}