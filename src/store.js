import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

// my reducers
import rootReducer from './reducers';

let initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({
            //options like actionSanitizer
        }) : compose;

        const enhancer = composeEnhancers(
            applyMiddleware(...middleware),

        );

const store = createStore (
    rootReducer, 
    initialState, 
    enhancer);

export default store;