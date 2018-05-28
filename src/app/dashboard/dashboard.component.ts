import { Note } from '../Note';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
  @Input() note: Note;
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && changes['note'].currentValue) {
      const currentValue: Note = changes['note'].currentValue;

      this.note = currentValue.clone();
    }
  }

  noteChanged(value) {
    this.note = Note.builder()
      .id(this.note.id)
      .value(value)
      .build();

    this.onNoteChanged.emit(this.note);
  }
}
