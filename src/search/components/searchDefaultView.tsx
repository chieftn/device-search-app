import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import './searchDefaultView.css';

export const SearchDefaultView: React.FC = () => {
    return (
        <div className='search-default'>
            <TextField
                label="Search"
            />
        </div>
    );
};
