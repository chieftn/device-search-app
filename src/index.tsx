import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Application } from './application/components/application';

initializeIcons();
ReactDOM.render(<Application />, document.getElementById('reactTarget'));