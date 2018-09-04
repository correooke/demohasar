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
    <Provider store={store}>
        <Router>
            <IntlProvider locale={'es'} messages={esAR}>
                <App />
            </IntlProvider>
        </Router>
    </Provider>
       )
    , document.getElementById('root'));
registerServiceWorker();
