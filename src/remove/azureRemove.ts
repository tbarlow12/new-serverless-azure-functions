import { AzureProvider } from "../provider/azureProvider";

export class AzureRemove {
    serverless: any;
    options: any;
    provider: AzureProvider;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:remove:remove': async () => await this.beforeRemove,
            'remove:remove': async () => await this.remove,
        }
    }

    beforeRemove = async () => {

    }

    remove = async () => {

    }

    afterRemove = async () => {

    }
}