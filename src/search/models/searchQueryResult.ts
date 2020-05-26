import { SearchQueryResultValue } from './searchQueryResultValue';

export interface SearchQueryResult {
    '@odata.count'?: string;
    '@odata.nextLink'?: string;
    '@search.facets'?: any;
    value: SearchQueryResultValue[];
}
