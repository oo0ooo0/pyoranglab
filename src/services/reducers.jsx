import { combineReducers } from 'redux';
import { feedReducer } from './works/reducer';

export const rootReducer = combineReducers({
  works: feedReducer,
});
