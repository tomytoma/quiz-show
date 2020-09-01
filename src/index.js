import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Show from './Show';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Show />, document.getElementById('root'));

serviceWorker.unregister();