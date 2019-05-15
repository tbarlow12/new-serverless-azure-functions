export class AzureLogs {
    serverless: any;
    options: any;
    provider: any;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:logs:logs': async () => await this.beforeLogs,
            'logs:logs': async () => await this.logs,
            'after:logs:logs': async () => await this.afterLogs,
        }
    }

    beforeLogs = async () => {

    }

    logs = async () => {

    }

    afterLogs = async () => {

    }
}