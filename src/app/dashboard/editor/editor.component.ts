import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kd-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() note: string;

  constructor() {}

  ngOnInit() {}

  noteChanged(value) {}
}
