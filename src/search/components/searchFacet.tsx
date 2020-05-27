import * as React from 'react';
import { SearchQueryFacetEntry } from '../models/searchQueryFacetEntry';


export interface SearchFacetProps {
    facetName: string;
    facetEntries: SearchQueryFacetEntry[];
}

export const SearchFacet: React.FC<SearchFacetProps> = props => {
    const { facetName, facetEntries} = props;

    return (
        <div>
            <h3>{getFacetName(facetName)}</h3>
            <div>
               {facetEntries.map((entry: SearchQueryFacetEntry) =>
                    <div>
                        <span>{getEntryName(facetName, entry.value)}</span>
                        (<span>{entry.count}</span>)
                    </div>
               )}
            </div>
        </div>
    );
};

export const getFacetName = (facetName: string): string => {
    if (facetName === 'iotEdge') {
        return 'IoT Edge';
    }

    if (facetName === 'status') {
        return 'Device Status'
    }

    return facetName;
};

export const getEntryName = (facetName: string, entryValue: string | boolean): string => {
    if (facetName = 'iotEdge') {
        return entryValue ? 'Edge Devices' : 'Non-Edge Devices';
    }

    return entryValue.toString();
}
