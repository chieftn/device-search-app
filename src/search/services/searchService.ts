import { applicationConfiguration } from '../../applicationConfiguration/applicationConfiguration';
import { HttpError } from '../../application/models/HttpError';
import { APPLICATION_JSON, HTTP_OPERATIONS } from '../../constants';
import { SearchQueryResult } from '../models/searchQueryResult';

const API_VERSION = '2019-05-06'

export interface SearchParameters {
    queryCriteria: string;
}

export const executeSearch = async (parameters : SearchParameters): Promise<SearchQueryResult> => {
    const { queryCriteria } = parameters;
    const { serviceName, indexName, searchKey } = applicationConfiguration.search;

    const resourceUrl = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs?api-version=${API_VERSION}&search=${encodeURIComponent(queryCriteria)}`;
    const serviceRequestParams: RequestInit = {
            headers: new Headers({
            'api-key': searchKey,
            'Accept': APPLICATION_JSON,
            'Content-Type': APPLICATION_JSON
        }),

        method: HTTP_OPERATIONS.GET
    };
    const response = await fetch(resourceUrl, serviceRequestParams);
    if (!response.ok) {
        throw new HttpError(response.status);
    }

    const responseBody = await response.json() as SearchQueryResult;
    return responseBody;
};
