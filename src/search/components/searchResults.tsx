import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { queryStrings } from '../../constants';

export const SearchResults: React.FC = () => {
    const location = useLocation();
    const search = location.search;
    const searchParams = new URLSearchParams(search);
    const searchCriteria = searchParams.get(queryStrings.searchParameters);


    React.useEffect(() => {
        console.log(searchCriteria);
    }, []);

    return (
        <div>
            Hello World
        </div>
    )
};