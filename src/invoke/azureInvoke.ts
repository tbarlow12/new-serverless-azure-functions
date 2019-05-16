import { AzureProvider } from "../provider/azureProvider";

export class AzureInvoke {
    serverless: any;
    options: any;
    provider: AzureProvider;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:invoke:invoke': async () => await this.beforeInvoke,
            'invoke:invoke': async () => await this.invoke,
            'after:invoke:invoke': async () => await this.afterInvoke,
        }
    }

    beforeInvoke = async () => {

    }

    invoke = async () => {

    }

    afterInvoke = async () => {

    }
}