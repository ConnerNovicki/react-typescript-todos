import { createStore, applyMiddleware, Store  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export function configureStore(): Store<any> {
  return createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
}