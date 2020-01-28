import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

let reRender = (value) => {
    ReactDOM.render( <App 
        state = {value.getState()} 
        dispatch = {value.dispatch.bind(value)} />, 
        document.getElementById('root'));
}

store.subscribe(reRender);

reRender(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();