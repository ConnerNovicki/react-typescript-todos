import { createStore, applyMiddleware  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './combine-epics';
import { rootReducer } from './combine-reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
}