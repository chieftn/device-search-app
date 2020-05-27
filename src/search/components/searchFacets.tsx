import * as React from 'react';
import { SearchFacet } from './searchFacet';
import { StringMap } from '../../application/models/stringMap';
import { SearchQueryFacetEntry } from '../models/searchQueryFacetEntry';
import './searchFacets.css';

export interface SearchFacetsProps {
    searchQueryFacets: StringMap<SearchQueryFacetEntry[]>;
}

export const SearchFacets: React.FC<SearchFacetsProps> = props => {
    const { searchQueryFacets } = props;

    return (
        <div className='search-facets'>
           {Object.keys(searchQueryFacets).map(key =>
                <SearchFacet
                    key={key}
                    facetName={key}
                    facetEntries={searchQueryFacets[key]}
                />
            )}
        </div>
    );
};
