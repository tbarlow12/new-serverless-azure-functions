import { AzureProvider } from "../provider/azureProvider";

export class AzureDeploy {
    serverless: any;
    options: any;
    provider: AzureProvider;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:deploy:deploy': async () => await this.beforeDeploy,
            'deploy:deploy': async () => await this.deploy,
            'after:deploy:deploy': async () => await this.afterDeploy,
        }
    }

    async beforeDeploy () {

    }

    async deploy () {

    }

    async afterDeploy () {

    }

    async cleanUpFunctions () {

    }

    async createResourceGroupAndFunctionApp() {
        
    }

    async uploadFunctions() {

    }


}