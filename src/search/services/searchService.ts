import { applicationConfiguration } from '../../applicationConfiguration/applicationConfiguration';
import { HttpError } from '../../application/models/httpError';
import { APPLICATION_JSON, HTTP_OPERATIONS } from '../../constants';
import { SearchQueryResult } from '../models/searchQueryResult';

const API_VERSION = '2019-05-06'

export interface SearchParameters {
    queryText: string;
    facets?: string;
    filters?: string;
}

export const executeSearch = async (parameters : SearchParameters): Promise<SearchQueryResult> => {
    const { queryText } = parameters;
    const { serviceName, indexName, searchKey } = applicationConfiguration.search;

    const resourceUrl = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs/search?api-version=${API_VERSION}`;
    const serviceRequestParams: RequestInit = {
            body: JSON.stringify({
                count: true,
                queryType: (queryText && queryText !== '*') ? 'full' : 'simple',
                facets: ['iotEdge', 'status'],
                // filter: `(iotEdge eq false) and (status eq 'Enabled')`,
                search: (queryText && queryText !== '*') ? `${queryText}~` : '*'
            }),
            headers: new Headers({
            'api-key': searchKey,
            'Accept': APPLICATION_JSON,
            'Content-Type': APPLICATION_JSON
        }),

        method: HTTP_OPERATIONS.POST
    };
    const response = await fetch(resourceUrl, serviceRequestParams);
    if (!response.ok) {
        throw new HttpError(response.status);
    }

    const responseBody = await response.json() as SearchQueryResult;
    return responseBody;
};


export const getFacet = async (): Promise<any> => {


}
