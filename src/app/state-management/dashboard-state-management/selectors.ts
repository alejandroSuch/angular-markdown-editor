import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers/index';

const modeFeatureSelector = createFeatureSelector('dashboard');

export const getMode = createSelector(modeFeatureSelector, (state: State) => state.mode);
