import { Action } from '@ngrx/store';
import { Note } from '../../../domain/Note';

export enum AllNotesActionTypes {
  LOAD_ALL = '[All Notes] Load all',
  LOAD_ALL_SUCCESS = '[All Notes] Load all success',
  LOAD_ALL_ERROR = '[All Notes] Load error'
}

export class LoadAllAction implements Action {
  readonly type = AllNotesActionTypes.LOAD_ALL;
}

export class LoadAllSuccessAction implements Action {
  readonly type = AllNotesActionTypes.LOAD_ALL_SUCCESS;

  constructor(public payload: Note[]) {}
}

export class LoadAllErrorAction implements Action {
  readonly type = AllNotesActionTypes.LOAD_ALL_ERROR;

  constructor(public payload: string) {}
}

export type AllNotesActions = LoadAllAction | LoadAllSuccessAction | LoadAllErrorAction;
