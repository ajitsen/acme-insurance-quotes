import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Not using service worker
// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
// We will not be using service worker - used in progressive webapp
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app
// registerServiceWorker();
