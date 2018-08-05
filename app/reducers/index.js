import { combineReducers } from 'redux';

import data from './data';
import auth from './auth';

const rootReducer = combineReducers({
    auth, data
})

export default rootReducer;