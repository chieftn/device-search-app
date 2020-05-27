import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { parse, stringify } from 'query-string';
import { executeSearch } from '../services/searchService';
import { QUERY_STRINGS, URL_STRINGS } from '../../constants';
import { SearchQueryResult } from '../models/searchQueryResult';
import { SearchResultEntries } from './searchResultEntries';
import { SearchBar } from './searchBar';
import { SearchFacets } from './searchFacets';
import "./searchResults.css";

export const SearchResults: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const search = location.search;
    const searchParams = parse(search);

    const [searchQueryResult, setSearchQueryResult] = React.useState<SearchQueryResult>(undefined);
    const [searchCriteria, setSearchCriteria] = React.useState<string>(searchParams[QUERY_STRINGS.SEARCH_PARAMETERS] || '');

    React.useEffect(() => {
        const execute = async () => {
            const result = await executeSearch({
                queryText: searchCriteria
            });

            setSearchQueryResult(result);
        };

        execute();
    }, [search]);

    const onSearchCriteriaChange = (newSearchCriteria: string) => {
        setSearchCriteria(newSearchCriteria);
    }

    const onSearch = () => {
        searchParams[QUERY_STRINGS.SEARCH_PARAMETERS] = searchCriteria;
        const newSearch = stringify(searchParams);

        history.push(`${URL_STRINGS.RESULTS}?${newSearch}`);
    }

    return (
        <div className="search-results">
            <div className="top">
                <SearchBar
                    searchCriteria={searchCriteria}
                    onSearch={onSearch}
                    onSearchCriteriaChange={onSearchCriteriaChange}
                />
            </div>

            <div className="left">
                {searchQueryResult &&
                    <SearchFacets
                        searchQueryFacets={searchQueryResult["@search.facets"]}

                    />
                }
            </div>

            <div className="center">
                {searchQueryResult &&
                    <SearchResultEntries
                        searchQueryResultValues={searchQueryResult.value}
                        totalNumberResultValues={searchQueryResult["@odata.count"]}
                    />
                }
            </div>
        </div>
    )
};
