import { Component, OnInit } from '@angular/core';

import parseMarkdown from 'parse-markdown-js';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  note: string = `
## Welcome to the Markdown Editor

Made with Angular & Material Design

regards,  Alex


  `;

  parsedNote: string;

  ngOnInit() {
    const storedValue = localStorage.getItem('note');

    if (storedValue) {
      this.note = storedValue;
    }

    this.parse();
  }

  noteChanged(value) {
    this.note = value;
    localStorage.setItem('note', this.note);
    this.parse();
  }

  parse() {
    this.parsedNote = parseMarkdown(this.note);
  }
}
