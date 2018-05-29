import { ConfirmDeleteNoteComponent } from './confirm-delete-note/confirm-delete-note.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NotesService } from './Notes.service';
import { Component, OnInit } from '@angular/core';
import { Note } from './Note';

import { map } from 'rxjs/operators';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[];
  note: Note;
  mode: string;

  constructor(private notesService: NotesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllNotes();
  }

  addNote() {
    this.note = Note.builder().build();
    this.notesService.save(this.note);
    this.getAllNotes();
  }

  selectNote(note: Note) {
    this.note = this.notesService.get(note.id);
    console.log('selected note is', this.note);
  }

  updateNote(note: Note) {
    this.notesService.save(note);
    this.note = note;
    this.getAllNotes();
  }

  deleteNote(note: Note) {
    const ref: MatDialogRef<ConfirmDeleteNoteComponent> = this.dialog.open(ConfirmDeleteNoteComponent);

    ref
      .afterClosed()
      .pipe(
        map(shouldDelete => {
          if (shouldDelete) {
            this.notesService.remove(note);
            if (this.note && this.note.id === note.id) {
              this.note = null;
            }
            this.getAllNotes();
          }
        })
      )
      .subscribe();
  }

  toggleMode(mode) {
    this.mode = mode;
  }

  private getAllNotes() {
    this.notes = this.notesService.getAllNotes();
  }
}
