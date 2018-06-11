import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { DashboardMode } from './DashboardMode';
import { Note } from '../domain/Note';

@Component({
  selector: 'kd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnChanges {
  @Input() note: Note;
  @Input() mode: DashboardMode;
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();

  columns: number = 2;
  showEditor: boolean = true;
  showPreview: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && changes['note'].currentValue) {
      const currentValue: Note = changes['note'].currentValue;

      this.note = currentValue.clone();
    }

    if (changes['mode'] && typeof changes['mode'].currentValue === 'number') {
      const mode = changes['mode'].currentValue;
      switch (mode) {
        case DashboardMode.EDITOR:
          this.columns = 1;
          this.showEditor = true;
          this.showPreview = false;
          break;
        case DashboardMode.PREVIEW:
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
    this.onNoteChanged.emit(
      Note.builder()
        .id(this.note.id)
        .title(this.note.title)
        .value(value)
        .dateCreated(this.note.dateCreated)
        .lastUpdated(new Date())
        .build()
    );
  }

  titleChanged(title) {
    this.onNoteChanged.emit(
      Note.builder()
        .id(this.note.id)
        .title(title)
        .value(this.note.value)
        .dateCreated(this.note.dateCreated)
        .lastUpdated(new Date())
        .build()
    );
  }
}
