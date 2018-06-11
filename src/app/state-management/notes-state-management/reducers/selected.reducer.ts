import {
  DeleteSuccessAction,
  LoadSuccessAction,
  NewSuccessAction,
  SelectedNoteActions,
  SelectedNoteActionTypes,
  UpdateSuccessAction
} from '../actions/selected.actions';
import { Note } from '../../../Note';

const initialState: Note = null;

export function reducer(state = initialState, action: SelectedNoteActions) {
  switch (action.type) {
    case SelectedNoteActionTypes.NEW_SUCCESS:
      return (<NewSuccessAction>action).payload.clone();
    case SelectedNoteActionTypes.LOAD_SUCCESS:
    case SelectedNoteActionTypes.UPDATE_SUCCESS:
      return (<LoadSuccessAction | UpdateSuccessAction>action).payload.clone();
    case SelectedNoteActionTypes.DELETE_SUCCESS:
      if ((<DeleteSuccessAction>action).payload == state.id) {
        return null;
      }
      return state;
    default:
      return state;
  }
}
