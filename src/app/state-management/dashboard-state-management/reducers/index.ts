import * as fromMode from './mode.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { DashboardMode } from '../../../dashboard/DashboardMode';

export interface State {
  mode: DashboardMode;
}

export const reducers: ActionReducerMap<State> = {
  mode: fromMode.reducer
};
