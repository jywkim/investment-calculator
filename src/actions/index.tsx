import * as constants from '../constants';

/* tslint:disable no-any */
export interface UpdateField {
  type: constants.UPDATE_FIELD;
  data: any;
}

export type UpdateFieldAction = UpdateField;

export function updateField(id: string, fields: any): UpdateField {
  return {
    type: constants.UPDATE_FIELD,
    data: { id, fields }
  };
}

export interface AddComponent {
  type: constants.ADD_COMPONENT;
  data: {
    id: string
  };
}

export type componentAction = AddComponent;

export function addComponent(id: string): AddComponent {
  return {
    type: constants.ADD_COMPONENT,
    data: { id }
  };
}
