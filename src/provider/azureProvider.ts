import { ResourceManagementClient } from "azure-arm-resource"
import { ServiceClientCredentials } from "ms-rest";


const constants = {
    providerName: 'azure',
}

export class AzureProvider {
    serverless: any;
    options: any;
    provider: AzureProvider;

    functionAppName: string;
    resourceGroupName: string;
    deploymentName: string;
    subscriptionId: string;

    principalCredentials: ServiceClientCredentials;
    existingFunctionApp: boolean;
    deployedFunctionNames: string[];
    
    
    static getProviderName() {
        return constants.providerName;
    }

    constructor(serverless) {
        this.provider = this;
        this.serverless = serverless;

        this.serverless.setProvider(constants.providerName, this);
    }

    log = (message: string) => {
        this.serverless.cli.log(message);
    }

    async initialize(serverless, options) {
        this.serverless = serverless;
        this.options = options;

        this.functionAppName = this.serverless.service.service;
        this.resourceGroupName = this.serverless.service.provider.resourceGroup || `${this.functionAppName}-rg`;
        this.deploymentName = this.serverless.service.provider.deploymentName || `${this.resourceGroupName}-deployment`;
        return Promise.resolve();
    }

    createResourceGroup = () => {
        const client = this.resourceClient();
    }

    createFunctionApp = () => {
        const client = this.resourceClient();
    }

    deleteDeployment = () => {
        const client = this.resourceClient();
    }

    deleteResourceGroup = () => {
        const client = this.resourceClient();
    }

    resourceClient = () => {
        return new ResourceManagementClient.ResourceManagementClient(this.principalCredentials, this.subscriptionId);
    }


}