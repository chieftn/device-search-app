import * as React from 'react';
import { SearchResultEntry } from './searchResultEntry';
import { SearchQueryResultValue } from '../models/searchQueryResultValue';

export interface SearchResultEntriesProps {
    searchQueryResultValues: SearchQueryResultValue[];
}

export const SearchResultEntries: React.FC<SearchResultEntriesProps> = props => {
    const { searchQueryResultValues } = props;

    return (
        <div>
            <div>Results</div>
            <ul>
                {searchQueryResultValues.map(s => {
                    return <SearchResultEntry
                        searchQueryResultValue={s}
                    />
                })}
            </ul>
            {searchQueryResultValues.length === 0 &&
                <div>No results found for this query</div>
            }
        </div>
    );
};
