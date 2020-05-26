import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { executeSearch } from '../services/searchService';
import { QUERY_STRINGS } from '../../constants';
import { SearchQueryResult } from '../models/searchQueryResult';
import { SearchResultEntries } from './searchResultEntries';

export const SearchResults: React.FC = () => {
    const location = useLocation();
    const search = location.search;
    const searchParams = new URLSearchParams(search);
    const searchCriteria = searchParams.get(QUERY_STRINGS.SEARCH_PARAMETERS);

    const [searchQueryResult, setSearchQueryResult] = React.useState<SearchQueryResult>(undefined);

    React.useEffect(() => {
        const execute = async () => {
            const result = await executeSearch({
                queryCriteria: searchCriteria
            });

            setSearchQueryResult(result);
        };

        execute();
    }, []);

    return (
        <div>
            {searchQueryResult &&
                <div>
                    <SearchResultEntries
                        searchQueryResultValues={searchQueryResult.value}
                    />
                </div>
            }
        </div>
    )
};
