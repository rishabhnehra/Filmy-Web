import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ReduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Popular from './Popular/Popular'
import { popularReducer } from './Popular/reducer'
import NowPlaying from './NowPlaying/NowPlaying'
import { nowPlayingReducer } from './NowPlaying/reducer'
import UpComing from './UpComing/UpComing'
import { upComingReducer } from './UpComing/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    popular: popularReducer,
    nowPlaying: nowPlayingReducer,
    upComing: upComingReducer
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(ReduxThunk)
))

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Route path="/" component={App} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/now_playing" component={NowPlaying} />
            <Route exact path="/upcoming" component={UpComing} />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
