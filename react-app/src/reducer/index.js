import { combineReducers } from 'redux';

// Reducers
import homeReducer from './homeReducer';
import newsReducer from './newsReducer';
// Combine Reducers
var reducers = combineReducers({
    homeReducer: homeReducer,
    newsReducer: newsReducer,
});

export default reducers;