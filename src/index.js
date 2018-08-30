import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import store from './store';
import es from 'react-intl/locale-data/es';
import esAR from './languaje/es-AR';

addLocaleData(es);


ReactDOM.render((
    <IntlProvider locale={'es'} messages={esAR}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </IntlProvider>   )
    , document.getElementById('root'));
registerServiceWorker();
