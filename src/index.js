import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';


const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  //no axios in redux
  if(action.type === 'SET_BOOKS') {
    return action.payload; //this is response.data in the App.jsx - this is all the rows from an array
  }
  return state;
}

const reduxStore = createStore(
  combineReducers({
    bookList
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
