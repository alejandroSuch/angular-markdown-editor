import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import parseMarkdown from 'parse-markdown-js';

@Component({
  selector: 'kd-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnChanges {
  @Input() note: string;

  parsedNote: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note']) {
      this.parsedNote = parseMarkdown(changes['note'].currentValue);
    }
  }
}
