import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import './searchBar.css';

export interface SearchBarProps {
    searchCriteria: string;
    onSearch(): void;
    onSearchCriteriaChange(newValue: string): void;
}

export const SearchBar: React.FC<SearchBarProps> = props => {
    const { searchCriteria, onSearch, onSearchCriteriaChange} = props;

    const onSearchButtonClick = () => {
        onSearch();
    }

    const onSearchTextChange = (event: any, newText: string) => {
        onSearchCriteriaChange(newText);
    }

    return (
        <div className="search-bar">
            <TextField
                className='search-bar-text'
                ariaLabel="Search Criteria"
                value={searchCriteria}
                onChange={onSearchTextChange}
            />
            <PrimaryButton
                iconProps={{ iconName: 'Search' }}
                ariaLabel="Search"
                onClick={onSearchButtonClick}
            />
        </div>
    );
};
