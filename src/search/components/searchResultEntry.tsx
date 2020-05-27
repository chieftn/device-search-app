import * as React from 'react';
import { Link } from '@fluentui/react/lib/Link';
import { SearchQueryResultValue } from '../models/searchQueryResultValue';
import './searchResultEntry.css';

export interface SearchResultEntryProps {
    searchQueryResultValue: SearchQueryResultValue;
}

export const SearchResultEntry: React.FC<SearchResultEntryProps> = props => {
    const { searchQueryResultValue } = props;
    const { deviceId } = searchQueryResultValue;

    return (
        <li className="search-result-entry">
            <div>
                <Link
                    href={'cnn.com'}
                    target={'_blank'}
                >
                    <span className="ms-fontSize-20">{deviceId}</span>
                </Link>
            </div>
            <div>
                <span className='prefix'>Status:</span>
                <span>{searchQueryResultValue.status}</span>
            </div>
            <div>
                <span className='prefix'>Edge Device:</span>
                <span>{searchQueryResultValue.iotEdge.toString()}</span>
            </div>
            <div>
                <span className='prefix'>Authentication Type:</span>
                <span>{searchQueryResultValue.authenticationType}</span>
            </div>
        </li>
    );
};
