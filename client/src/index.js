import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App/App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import books from 'Components/App/reducer';
import BookInput from 'Components/BookInput/reducer';
const appReducers = {books,BookInput};
console.log('Create store');
export const store = createStore(combineReducers(appReducers), applyMiddleware(thunk))

ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
    </BrowserRouter>,
     document.getElementById('root'));

