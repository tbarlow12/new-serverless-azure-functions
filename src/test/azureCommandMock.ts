

class AzureCommandMock {
    options;
    provider;
    serverless;
    testSubject;
    constructor(serverless, options, testSubject) {
        this.options = options;
        this.serverless = serverless;
        this.provider = this.serverless.getProvider('azure');

        
    }

}