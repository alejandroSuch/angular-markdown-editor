import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './feature-name';
import { State } from './reducers/index';

const notesSelector = createFeatureSelector<State>(FEATURE_NAME);

export const getAllNotes = createSelector(notesSelector, (state: State) => state.all);
export const getSelectedNote = createSelector(notesSelector, (state: State) => state.selected);
