import { Action } from '@ngrx/store';
import { DashboardMode } from '../../../dashboard/DashboardMode';

export enum DashboardModeActionTypes {
  SET_MODE = '[Dashboard mode] Set mode'
}

export class SetModeAction implements Action {
  readonly type = DashboardModeActionTypes.SET_MODE;

  constructor(public payload: DashboardMode) {}
}

export type ModeActions = SetModeAction;
