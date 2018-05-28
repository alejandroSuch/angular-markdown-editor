import { Note } from './../Note';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kd-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() note: string;

  @Output() onNoteChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  noteChanged(value) {
    console.log('emitting', value);
    this.onNoteChanged.emit(value);
  }
}
