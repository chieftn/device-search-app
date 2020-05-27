import { SearchQueryResultValue } from './searchQueryResultValue';

export interface SearchQueryResult {
    '@odata.count'?: number;
    '@odata.nextLink'?: string;
    '@search.facets'?: any;
    value: SearchQueryResultValue[];
}
