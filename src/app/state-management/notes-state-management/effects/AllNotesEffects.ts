import { Actions, Effect, ofType } from '@ngrx/effects';
import { AllNotesActionTypes, LoadAllAction, LoadAllErrorAction, LoadAllSuccessAction } from '../actions/all.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NewSuccessAction, SelectedNoteActionTypes } from '../actions/selected.actions';
import { Note } from '../../../Note';
import { NotesRepository } from '../../../NotesRepository';
import { of } from 'rxjs';

@Injectable()
export class AllNotesEffects {
  @Effect()
  loadAll$ = this.actions$.pipe(
    ofType(AllNotesActionTypes.LOAD_ALL),
    map(() => this.notesRepository.findAll()),
    map((notes: Note[]) => new LoadAllSuccessAction(notes)),
    catchError(({ message }: Error) => of(new LoadAllErrorAction(message)))
  );

  @Effect()
  new$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.NEW_SUCCESS),
    map(({ payload }: NewSuccessAction) => {
      this.notesRepository.save(payload);
      return payload;
    }),
    map(() => new LoadAllAction())
  );

  constructor(private notesRepository: NotesRepository, private actions$: Actions) {}
}
