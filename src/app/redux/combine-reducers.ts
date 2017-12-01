import { combineReducers } from 'redux';
import ListViewReducer from '../ListView/reducer';

export const rootReducer = combineReducers({
  listViewReducer: ListViewReducer,
});
  