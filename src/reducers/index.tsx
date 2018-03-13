import { combineReducers, Reducer } from 'redux';

import { UpdateFieldAction, componentAction } from '../actions';
import { StoreState } from '../types/index';
import { UPDATE_FIELD, ADD_COMPONENT } from '../constants/index';

export const rootReducer: Reducer<StoreState> = combineReducers({
  components
});

/* tslint:disable no-any */
export function components(state: any, action: componentAction | UpdateFieldAction): StoreState {
  /* tslint:disable switch-default */
  if (!state) {
    state = {

    };
  }

  const { type, data } = action;

  switch (type) {
    case ADD_COMPONENT:
      const newComponent = {
        id: data.id,
        shareQuantity: 0,
        sharePrice: 0,
        subTotal: 0
      };
      return { ...state, [data.id]: newComponent };
    case UPDATE_FIELD:
    return { ...state, [data.id]: { ...data.fields, id: data.id } };
  }
  return state;
}
