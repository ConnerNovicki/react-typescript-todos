import { Action } from 'redux';

export const CHANGE_VALUE_ACTION = 'change-value';
export interface ChangeValueAction extends Action {
  payload: { newValue: string }
}

export const changeValueActionCreator = (newValue: string): ChangeValueAction => {
  return {
    type: CHANGE_VALUE_ACTION,
    payload: { newValue }
  }
}
