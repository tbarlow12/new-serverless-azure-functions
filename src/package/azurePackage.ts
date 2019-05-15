export class AzurePackage {
    serverless: any;
    options: any;
    provider: any;
    hooks: any;
    
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('azure');

        this.hooks = {
            'package:cleanup': () => async () => await this.packageCleanup,
            'before:package:initialize': async () => await this.beforePackageInitialize,
            'package:initialize': async () => await this.packageInitialize,
            'before:package:compileFunctions': async () => await this.beforePackageCompileFunctions,
            'package:compileFunctions': async () => await this.packageCompileFunctions,
            'package:finalize': async () => await this.packageFinalize,
        }
    }

    packageCleanup = async () => {

    }

    beforePackageInitialize = async () => {

    }

    packageInitialize = async () => {

    }

    beforePackageCompileFunctions = async () => {

    }

    packageCompileFunctions = async () => {

    }

    packageFinalize = async () => {

    }
}