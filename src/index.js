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
import NowPlaying from './NowPlaying/NowPlaying'
import UpComing from './UpComing/UpComing'
import Movie from './Movie/Movie'
import Person from './Person/Persona'

import { popularReducer } from './Popular/reducer'
import { nowPlayingReducer } from './NowPlaying/reducer'
import { upComingReducer } from './UpComing/reducer'
import { fetchingReducer } from './Fetching/reducer'
import { movieReducer } from './Movie/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const reducers = combineReducers({
    popular: popularReducer,
    nowPlaying: nowPlayingReducer,
    upComing: upComingReducer,
    fetching: fetchingReducer,
    movie: movieReducer
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
            <Route exact path="/movie/:id" component={Movie}/>
            <Route exact path="/person/:id" component={Person} />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
