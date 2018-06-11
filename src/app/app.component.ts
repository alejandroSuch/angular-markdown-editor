import * as fromDashboard from './state-management/dashboard-state-management/selectors';
import * as fromNotes from './state-management/notes-state-management/selectors';
import { Component, OnInit } from '@angular/core';
import { ConfirmDeleteNoteComponent } from './confirm-delete-note/confirm-delete-note.component';
import { DashboardMode } from './dashboard/DashboardMode';
import {
  DeleteAction,
  LoadAction,
  NewAction,
  UpdateAction
} from './state-management/notes-state-management/actions/selected.actions';
import { LoadAllAction } from './state-management/notes-state-management/actions/all.actions';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Note } from './Note';
import { Observable } from 'rxjs';
import { SetModeAction } from './state-management/dashboard-state-management/actions/mode.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes$: Observable<Note[]>;
  note$: Observable<Note>;
  mode$: Observable<DashboardMode>;

  constructor(private dialog: MatDialog, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadAllAction());

    this.notes$ = this.store.select(fromNotes.getAllNotes);
    this.note$ = this.store.select(fromNotes.getSelectedNote);
    this.mode$ = this.store.select(fromDashboard.getMode);
  }

  addNote() {
    this.store.dispatch(new NewAction());
  }

  selectNote(note: Note) {
    this.store.dispatch(new LoadAction(note.id));
  }

  updateNote(note: Note) {
    this.store.dispatch(new UpdateAction(note));
  }

  deleteNote(note: Note) {
    const ref: MatDialogRef<ConfirmDeleteNoteComponent> = this.dialog.open(ConfirmDeleteNoteComponent);

    ref
      .afterClosed()
      .pipe(
        map(shouldDelete => {
          if (shouldDelete) {
            this.store.dispatch(new DeleteAction(note.id));
          }
        })
      )
      .subscribe();
  }

  toggleMode(mode) {
    this.store.dispatch(new SetModeAction(mode));
  }
}
