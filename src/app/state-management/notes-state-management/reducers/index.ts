import * as fromAll from './all.reducer';
import * as fromSelected from './selected.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Note } from '../../../Note';

export interface State {
  all: Note[];
  selected: Note;
}

export const reducers: ActionReducerMap<State> = {
  all: fromAll.reducer,
  selected: fromSelected.reducer
};
