const config = require('./applicationConfig.json');

export interface ApplicationConfiguration {
    search: SearchConfiguration;
}

export interface SearchConfiguration {
    serviceName: string;
    indexName: string;
    searchKey: string;
}

export const applicationConfiguration = config as ApplicationConfiguration;