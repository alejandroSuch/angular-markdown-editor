import { Action } from '@ngrx/store';
import { Note } from '../../../domain/Note';

export enum SelectedNoteActionTypes {
  NEW = '[Selected Note] New',
  NEW_SUCCESS = '[Selected Note] New success',
  NEW_ERROR = '[Selected Note] New error',

  LOAD = '[Selected Note] Load',
  LOAD_SUCCESS = '[Selected Note] Load succcess',
  LOAD_ERROR = '[Selected Note] Load error',

  INSERT = '[Selected Note] Insert',
  INSERT_SUCCESS = '[Selected Note] Insert success',
  INSERT_ERROR = '[Selected Note] Insert error',

  UPDATE = '[Selected Note] Update',
  UPDATE_SUCCESS = '[Selected Note] Update success',
  UPDATE_ERROR = '[Selected Note] Update error',
  
  DELETE = '[Selected Note] Delete',
  DELETE_SUCCESS = '[Selected Note] Delete success',
  DELETE_ERROR = '[Selected Note] Delete error'
}

export class NewAction implements Action {
  readonly type = SelectedNoteActionTypes.NEW;
}

export class NewSuccessAction implements Action {
  readonly type = SelectedNoteActionTypes.NEW_SUCCESS;

  constructor(public payload: Note) {} // payload = id
}

export class LoadAction implements Action {
  readonly type = SelectedNoteActionTypes.LOAD;

  constructor(public payload: string) {} // payload = id
}

export class LoadSuccessAction implements Action {
  readonly type = SelectedNoteActionTypes.LOAD_SUCCESS;

  constructor(public payload: Note) {}
}

export class LoadErrorAction implements Action {
  readonly type = SelectedNoteActionTypes.LOAD_ERROR;

  constructor(public payload: string) {} // payload = error message
}

export class InsertAction implements Action {
  readonly type = SelectedNoteActionTypes.INSERT;

  constructor(public payload: Note) {}
}

export class InsertSuccessAction implements Action {
  readonly type = SelectedNoteActionTypes.INSERT_SUCCESS;

  constructor(public payload: Note) {}
}

export class InsertErrorAction implements Action {
  readonly type = SelectedNoteActionTypes.INSERT_ERROR;

  constructor(public payload: string) {}
}

export class UpdateAction implements Action {
  readonly type = SelectedNoteActionTypes.UPDATE;

  constructor(public payload: Note) {}
}

export class UpdateSuccessAction implements Action {
  readonly type = SelectedNoteActionTypes.UPDATE_SUCCESS;

  constructor(public payload: Note) {}
}

export class UpdateErrorAction implements Action {
  readonly type = SelectedNoteActionTypes.UPDATE_ERROR;

  constructor(public payload: string) {}
}

export class DeleteAction implements Action {
  readonly type = SelectedNoteActionTypes.DELETE;

  constructor(public payload: string) {} // payload = id
}

export class DeleteSuccessAction implements Action {
  readonly type = SelectedNoteActionTypes.DELETE_SUCCESS;

  constructor(public payload: string) {} // payload = id
}

export class DeleteErrorAction implements Action {
  readonly type = SelectedNoteActionTypes.DELETE_ERROR;

  constructor(public payload: string) {} // payload = id
}

export type SelectedNoteActions =
  | NewAction
  | NewSuccessAction
  | LoadAction
  | LoadSuccessAction
  | LoadErrorAction
  | InsertAction
  | InsertSuccessAction
  | InsertErrorAction
  | UpdateAction
  | UpdateSuccessAction
  | UpdateErrorAction
  | DeleteAction
  | DeleteSuccessAction
  | DeleteErrorAction;
