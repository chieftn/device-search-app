import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SearchDefaultView } from './search/components/searchDefaultView';

const Application: React.FC = () => (
    <SearchDefaultView/>
);

ReactDOM.render(<Application />, document.getElementById('reactTarget'));