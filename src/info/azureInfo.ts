export class AzureInfo {
    serverless: any;
    options: any;
    provider: any;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'before:info:info': async () => await this.beforeInfo,
            'deploy:deploy': async () => await this.deploy,
            'info:info': async () => await this.info,
        }
    }

    beforeInfo = async () => {

    }

    deploy = async () => {

    }

    info = async () => {

    }
}