import { combineReducers } from 'redux';

// my reducers
import errorReducer from './errorReducer';
import alertReducer from './alertReducer';

import auth from './auth';

export default combineReducers ({

    errors: errorReducer,
    alert: alertReducer,
    auth,

});