export interface SearchQueryResultValue {
    '@search.score': string;
    deviceId: string;
    status: string;
    statusUpdateTime: string;
    cloudToDeviceMessageCount: string;
    authenticationType: string;
    iotEdge: boolean;
    id: string;
    rid: string;
}