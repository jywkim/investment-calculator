import * as constants from '../constants';

export interface UpdateField {
  type: constants.UPDATE_FIELD;
}

export type UpdateFieldAction = UpdateField;

export function updateField(): UpdateField {
  return {
    type: constants.UPDATE_FIELD
  };
}
