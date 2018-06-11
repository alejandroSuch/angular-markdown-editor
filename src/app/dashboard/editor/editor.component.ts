import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../domain/Note';

@Component({
  selector: 'kd-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent {
  @Input() note: Note;

  @Output() onNoteChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTitleChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  titleChanged(value) {
    this.onTitleChanged.emit(value);
  }

  noteChanged(value) {
    this.onNoteChanged.emit(value);
  }
}
