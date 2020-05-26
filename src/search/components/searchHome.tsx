import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';

import './searchHome.css';

export const SearchHome: React.FC = () => {
    const [searchCriteria, setSearchCriteria] = React.useState<string>('');

    const onSearchButtonClick = () => {
        console.log('here we are');
    }

    const onSearchCriteriaChange = (event: any, newText: string) => {
        setSearchCriteria(newText);
    }

    return (
        <div className='search-home'>
            <div className='search-controls'>
                <h1 className='ms-font-su'>IoT Device Search</h1>
                <TextField
                    ariaLabel="Search"
                    value={searchCriteria}
                    onChange={onSearchCriteriaChange}
                />
                <PrimaryButton
                    text="Search"
                    ariaLabel="Search"
                    onClick={onSearchButtonClick}
                />
            </div>
        </div>
    );
};
