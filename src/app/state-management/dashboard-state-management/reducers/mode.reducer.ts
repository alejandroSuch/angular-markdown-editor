import { DashboardMode } from '../../../dashboard/DashboardMode';
import { DashboardModeActionTypes, ModeActions } from '../actions/mode.actions';

const initialState = DashboardMode.EDITOR_AND_PREVIEW;

export function reducer(state = initialState, action: ModeActions) {
  switch (action.type) {
    case DashboardModeActionTypes.SET_MODE:
      return action.payload;
    default:
      return initialState;
  }
}
