import { ActionReducer } from '@ngrx/store';
import { AllNotesActions, AllNotesActionTypes, LoadAllSuccessAction } from './../actions/all.actions';
import {
  DeleteSuccessAction,
  InsertSuccessAction,
  SelectedNoteActions,
  SelectedNoteActionTypes,
  UpdateSuccessAction
} from './../actions/selected.actions';
import { Note } from '../../../Note';

const initialState: Note[] = [];

export const reducer = (state = initialState, action: AllNotesActions | SelectedNoteActions) => {
  switch (action.type) {
    case AllNotesActionTypes.LOAD_ALL_SUCCESS:
      return (<LoadAllSuccessAction>action).payload;
    case AllNotesActionTypes.LOAD_ALL_ERROR:
      return [];
    case SelectedNoteActionTypes.DELETE_SUCCESS:
      return state.filter(note => note.id !== (<DeleteSuccessAction>action).payload);
    case SelectedNoteActionTypes.INSERT_SUCCESS:
      return [...state, (<InsertSuccessAction>action).payload];
    case SelectedNoteActionTypes.UPDATE_SUCCESS:
      const note: Note = (<UpdateSuccessAction>action).payload;
      return state.map(it => (it.id === note.id ? note : it));
    default:
      return state;
  }
};
