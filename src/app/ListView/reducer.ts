import State from './state';
import { AnyAction } from 'redux';
import { CHANGE_VALUE_ACTION, ChangeValueAction } from './actions';

const DEFAULT_STATE: State = {
  value: 'some value'
};

export default (state: State = DEFAULT_STATE, action: AnyAction): State => {
  switch (action.type) {
    case CHANGE_VALUE_ACTION:
      const { newValue } = (action as ChangeValueAction).payload;
      return { ...state, value: newValue };
    default:
      return state;
  }
};
