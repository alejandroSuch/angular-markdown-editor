import { Note } from '../Note';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
  @Input() note: Note;
  @Input() mode: string;
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();

  columns: number = 2;
  showEditor: boolean = true;
  showPreview: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && changes['note'].currentValue) {
      const currentValue: Note = changes['note'].currentValue;

      this.note = currentValue.clone();
    }

    if (changes['mode'] && changes['mode'].currentValue) {
      const mode = changes['mode'].currentValue;
      switch (mode) {
        case 'editor':
          this.columns = 1;
          this.showEditor = true;
          this.showPreview = false;
          break;
        case 'preview':
          this.columns = 1;
          this.showEditor = false;
          this.showPreview = true;
          break;
        default:
          this.columns = 2;
          this.showEditor = true;
          this.showPreview = true;
          break;
      }
    }
  }

  noteChanged(value) {
    this.note = Note.builder()
      .id(this.note.id)
      .title(this.note.title)
      .value(value)
      .dateCreated(this.note.dateCreated)
      .lastUpdated(new Date())
      .build();

    this.onNoteChanged.emit(this.note);
  }

  titleChanged(title) {
    this.note = Note.builder()
      .id(this.note.id)
      .title(title)
      .value(this.note.value)
      .dateCreated(this.note.dateCreated)
      .lastUpdated(new Date())
      .build();

    console.log('change!', this.note);

    this.onNoteChanged.emit(this.note);
  }
}
