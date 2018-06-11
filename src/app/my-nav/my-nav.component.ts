import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardMode } from './../dashboard/DashboardMode';
import { map } from 'rxjs/operators';
import { Note } from '../domain/Note';
import { Observable } from 'rxjs';

@Component({
  selector: 'kd-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyNavComponent {
  @Input() notes: Note[];

  @Output() onAddNote: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelectNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onToggleMode: EventEmitter<string> = new EventEmitter<string>();

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

  togleBothMode() {
    this.toggleMode(DashboardMode.EDITOR_AND_PREVIEW);
  }

  toggleEditorMode() {
    this.toggleMode(DashboardMode.EDITOR);
  }

  togglePreviewMode() {
    this.toggleMode(DashboardMode.PREVIEW);
  }

  toggleMode(mode) {
    this.onToggleMode.emit(mode);
  }
}
