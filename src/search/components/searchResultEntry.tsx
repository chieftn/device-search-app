import * as React from 'react';
import { SearchQueryResultValue } from '../models/searchQueryResultValue';

export interface SearchResultEntryProps {
    searchQueryResultValue: SearchQueryResultValue;
}

export const SearchResultEntry: React.FC<SearchResultEntryProps> = props => {
    const { searchQueryResultValue } = props;
    const { deviceId } = searchQueryResultValue;

    console.log(JSON.stringify(searchQueryResultValue));
    return (
        <li>
            <span>{deviceId}</span>
            <span>{searchQueryResultValue.iotEdge ? 'true': 'false'}</span>
        </li>

    );
};
