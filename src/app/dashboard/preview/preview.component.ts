import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Note } from '../Note';

@Component({
  selector: 'kd-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() note: Note;

  constructor() {}
}
