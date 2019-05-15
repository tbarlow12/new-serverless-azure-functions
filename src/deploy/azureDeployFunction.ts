export class AzureDeployFunction {
    serverless: any;
    options: any;
    provider: any;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:function:packageFunction': async () => await this.beforePackageFunction,
            'deploy:function:deploy': async () => await this.deployFunction,
        }
    }

    beforePackageFunction = async () => {

    }

    deployFunction = async () => {

    }
}