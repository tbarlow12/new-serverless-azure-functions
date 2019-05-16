import { ResourceManagementClient } from "azure-arm-resource"
import { ServiceClientCredentials } from "ms-rest";
import { loginWithServicePrincipalSecret } from "ms-rest-azure"



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

    log(message: string) {
        this.serverless.cli.log(message);
    }

    async initialize(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;

        this.functionAppName = this.serverless.service.service;
        this.resourceGroupName = this.serverless.service.provider.resourceGroup || `${this.functionAppName}-rg`;
        this.deploymentName = this.serverless.service.provider.deploymentName || `${this.resourceGroupName}-deployment`;
        return Promise.resolve();
    }

    async login() {
        this.principalCredentials = await loginWithServicePrincipalSecret(
            process.env.AZURE_CLIENT_ID,
            process.env.AZURE_CLIENT_SECRET,
            process.env.AZURE_TENANT_ID
        );

    }    

    createResourceGroup() {
        const client = this.resourceClient();
    }

    createFunctionApp() {
        const client = this.resourceClient();
    }

    deleteDeployment() {
        const client = this.resourceClient();
    }

    deleteResourceGroup() {
        const client = this.resourceClient();
    }

    resourceClient() {
        return new ResourceManagementClient.ResourceManagementClient(this.principalCredentials, this.subscriptionId);
    }
}