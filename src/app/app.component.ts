import { NotesService } from './Notes.service';
import { Component, OnInit } from '@angular/core';
import { Note } from './Note';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[];
  note: Note;

  constructor(private notesService: NotesService) {}

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
  }

  private getAllNotes() {
    this.notes = this.notesService.getAllNotes();
  }
}
