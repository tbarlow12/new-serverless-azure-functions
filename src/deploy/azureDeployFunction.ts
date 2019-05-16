import { AzureProvider } from "../provider/azureProvider";

export class AzureDeployFunction {
    serverless: any;
    options: any;
    provider: AzureProvider;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'deploy:function:packageFunction': async () => await this.packageFunction,
            'deploy:function:deploy': async () => await this.deployFunction,
        }
    }

    packageFunction = async () => {
        this.serverless.pluginManager.spawn('package:function');
    }

    deployFunction = async () => {
        await this.provider.initialize(this.serverless, this.options);
        await this.provider.

    }
}