import { StringMap } from '../../application/models/stringMap';
import { SearchQueryResultValue } from './searchQueryResultValue';
import { SearchQueryFacetEntry } from '../models/searchQueryFacetEntry';

export interface SearchQueryResult {
    '@odata.count'?: number;
    '@odata.nextLink'?: string;
    '@search.facets'?: StringMap<SearchQueryFacetEntry[]>;
    value: SearchQueryResultValue[];
}
