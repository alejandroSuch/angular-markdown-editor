import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import {
  DeleteAction,
  DeleteErrorAction,
  DeleteSuccessAction,
  InsertAction,
  InsertErrorAction,
  InsertSuccessAction,
  LoadAction,
  LoadErrorAction,
  LoadSuccessAction,
  NewSuccessAction,
  SelectedNoteActionTypes,
  UpdateAction,
  UpdateErrorAction,
  UpdateSuccessAction
} from '../actions/selected.actions';
import { Injectable } from '@angular/core';
import { Note } from '../../../domain/Note';
import { NotesRepository } from '../../../domain/NotesRepository';
import { of, timer } from 'rxjs';

@Injectable()
export class SelectedNoteEffects {
  @Effect()
  new$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.NEW),
    map(() => new NewSuccessAction(Note.builder().build()))
  );

  @Effect()
  load$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.LOAD),
    map((action: LoadAction) => this.notesRepository.findById(action.payload)),
    map((note: Note) => new LoadSuccessAction(note)),
    catchError(({ message }: Error) => of(new LoadErrorAction(message)))
  );

  @Effect()
  insert$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.INSERT),
    map(({ payload }: InsertAction) => {
      this.notesRepository.save(payload);
      return payload;
    }),
    map((note: Note) => new InsertSuccessAction(note)),
    catchError(({ message }: Error) => of(new InsertErrorAction(message)))
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.UPDATE),
    debounce(() => timer(500)),
    tap(({ payload }: InsertAction) => {
      console.info('saving', payload);
    }),
    map(({ payload }: InsertAction) => {
      this.notesRepository.save(payload);
      return payload;
    }),
    map((note: Note) => new UpdateSuccessAction(note)),
    catchError((error: Error) => of(new UpdateErrorAction(error.message)))
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(SelectedNoteActionTypes.DELETE),
    map(({ payload }: DeleteAction) => {
      this.notesRepository.remove(payload);
      return payload;
    }),
    map((id: string) => new DeleteSuccessAction(id)),
    catchError((error: Error) => of(new DeleteErrorAction(error.message)))
  );

  constructor(private notesRepository: NotesRepository, private actions$: Actions) {}
}
