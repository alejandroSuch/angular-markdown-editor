import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers/index';

const notesSelector = createFeatureSelector<State>('notes');

export const getAllNotes = createSelector(notesSelector, (state: State) => state.all);
export const getSelectedNote = createSelector(notesSelector, (state: State) => state.selected);
