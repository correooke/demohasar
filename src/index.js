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
import enUS from './languaje/en-US';

const languages = {
    esAR, 
    enUS,
};

addLocaleData(es);

ReactDOM.render((
    <Provider store = {store}>
        <IntlProvider locale={'en'} messages={languages.enUS}>
            <Router>
                <App />
            </Router>
        </IntlProvider>
    </Provider>
       )
    , document.getElementById('root'));
registerServiceWorker();
