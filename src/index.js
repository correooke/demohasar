import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

const reducer = (state = { search: ''}, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, search: action.payload };            
        default:
            return state;
    }
  }
  
const store = createStore(reducer);

ReactDOM.render((
    <Router>
        <App store={store} />
    </Router>), document.getElementById('root'));
registerServiceWorker();
