import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { SearchBar } from './searchBar';
import { QUERY_STRINGS } from '../../constants';
import './searchHome.css';

export const SearchHome: React.FC = () => {
    const [searchCriteria, setSearchCriteria] = React.useState<string>('');
    const history = useHistory();

    const onSearch = () => {
        history.push(`/results?${QUERY_STRINGS.SEARCH_PARAMETERS}=${encodeURIComponent(searchCriteria)}`);
    }

    const onSearchCriteriaChange = (newText: string) => {
        setSearchCriteria(newText);
    }

    return (
        <div className='search-home'>
            <div className='search-controls'>
                <h1 className='ms-font-su'>IoT Device Search</h1>
                <SearchBar
                    searchCriteria={searchCriteria}
                    onSearchCriteriaChange={onSearchCriteriaChange}
                    onSearch={onSearch}
                />
            </div>
        </div>
    );
};
