import * as React from 'react';
import { SearchResultEntry } from './searchResultEntry';
import { SearchQueryResultValue } from '../models/searchQueryResultValue';

export interface SearchResultEntriesProps {
    searchQueryResultValues: SearchQueryResultValue[];
    totalNumberResultValues?: number;
}

export const SearchResultEntries: React.FC<SearchResultEntriesProps> = props => {
    const { searchQueryResultValues, totalNumberResultValues } = props;

    return (
        <div>
              {totalNumberResultValues > 0 &&
                <div>
                    <span>{totalNumberResultValues}</span>
                    <span style={{marginLeft: '4px', marginRight: '4px'}}>Results</span>
                </div>
            }


            <ul>
                {searchQueryResultValues.map((s,i) => {
                    return <SearchResultEntry
                        key={i}
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
