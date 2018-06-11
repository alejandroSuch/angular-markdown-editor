import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Note } from '../../Note';

@Component({
  selector: 'kd-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
  @Input() note: Note;

  constructor() {}
}
