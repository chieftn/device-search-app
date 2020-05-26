import * as React from 'react';
import { Fabric } from '@fluentui/react/lib/Fabric';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { SearchHome } from '../../search/components/searchHome';
import { SearchResults } from '../../search/components/searchResults';
import './application.css';

export const Application: React.FC = () => {
    return (
        <Fabric>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} component={SearchHome} exact={true} />
                        <Route path={'/results'} component={SearchResults} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Fabric>
      );
};