import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { executeSearch } from '../services/searchService';
import { QUERY_STRINGS } from '../../constants';
import { SearchQueryResult } from '../models/searchQueryResult';
import { SearchResultEntries } from './searchResultEntries';
import "./searchResults.css";

export const SearchResults: React.FC = () => {
    const location = useLocation();
    const search = location.search;
    const searchParams = new URLSearchParams(search);
    const searchCriteria = searchParams.get(QUERY_STRINGS.SEARCH_PARAMETERS);

    const [searchQueryResult, setSearchQueryResult] = React.useState<SearchQueryResult>(undefined);

    React.useEffect(() => {
        const execute = async () => {
            const result = await executeSearch({
                queryText: searchCriteria
            });

            setSearchQueryResult(result);
        };

        execute();
    }, []);

    return (
        <div className="search-results">
            <div className="search-results-header">
                <div>top</div>
            </div>

            <div className="search-results-left">
                <div>left</div>

            </div>

            <div className="search-results-center">
                {searchQueryResult &&
                    <div>
                        <SearchResultEntries
                            searchQueryResultValues={searchQueryResult.value}
                            totalNumberResultValues={searchQueryResult["@odata.count"]}
                        />
                    </div>
                }
            </div>



        </div>
    )
};
