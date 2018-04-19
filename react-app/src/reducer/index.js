import { combineReducers } from 'redux';

// Reducers
import homeReducer from './homeReducer';

// Combine Reducers
var reducers = combineReducers({
    homeReducer: homeReducer
});

export default reducers;