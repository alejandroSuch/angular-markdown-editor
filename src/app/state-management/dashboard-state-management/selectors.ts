import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './feature-name';
import { State } from './reducers/index';

const modeFeatureSelector = createFeatureSelector(FEATURE_NAME);

export const getMode = createSelector(modeFeatureSelector, (state: State) => state.mode);
