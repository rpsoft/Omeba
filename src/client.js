import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push  } from 'react-router-redux'
import Routes from './routes';

//import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  questions,
  // groups,
  // session,
  // results,
  // task,
} from './reducers/questions';

import {
  getQuestionsFromDB,
  getWaveDataFromDB,

} from './actions/actions'

// The initial state from server-generated HTML
// have a look to server code.
const initialState = window.__INITIAL_STATE__ || {}

// https://github.com/reactjs/react-router-redux
const middleware = routerMiddleware(browserHistory)

// // Create Redux store with initial state
const store = createStore(
  combineReducers({
    // account,
    routing: routerReducer,
    questions
    // task,
  }),
  initialState,
  compose(
    applyMiddleware(middleware,thunk),

    // Redux devToolsExtension
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(getQuestionsFromDB())
store.dispatch(getWaveDataFromDB())

ReactDOM.render(
  <Provider store={store}>
    {Routes( history )}
  </Provider>
  ,
  document.getElementById('root')
);
