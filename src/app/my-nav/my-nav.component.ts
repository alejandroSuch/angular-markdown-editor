import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from '../Note';

@Component({
  selector: 'kd-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  @Input() notes: Note[];

  @Output() onAddNote: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelectNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() {}

  onInit() {
    console.log('oninit', this.notes);
  }

  addNote(): void {
    this.onAddNote.emit();
  }

  selectNote(note: Note): void {
    this.onSelectNote.emit(note);
  }

  deleteNote(event: Event, note: Note) {
    event.preventDefault();
    event.stopPropagation();
    this.onDeleteNote.emit(note);
  }
}
