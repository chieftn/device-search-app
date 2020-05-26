import * as React from 'react';
import { Fabric } from '@fluentui/react/lib/Fabric';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { SearchHome } from '../../search/components/searchHome';

import './application.css';

export const Application: React.FC = () => {
    return (
        <Fabric>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} component={SearchHome} exact={true} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Fabric>
      );
};