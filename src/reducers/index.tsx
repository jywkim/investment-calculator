import { UpdateFieldAction } from '../actions';
import { StoreState } from '../types/index';
import { UPDATE_FIELD } from '../constants/index';

export function field(state: StoreState, action: UpdateFieldAction): StoreState {
  /* tslint:disable switch-default */
  switch (action.type) {
    case UPDATE_FIELD:
    return state;
      // return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
  }
  return state;
}
