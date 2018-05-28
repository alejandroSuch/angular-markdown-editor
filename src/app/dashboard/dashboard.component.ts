import { Note } from './Note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  note: Note;
  text: string = `
## Welcome to the Markdown Editor

Made with Angular & Material Design

regards,  Alex


  `;

  ngOnInit() {
    const storedValue = localStorage.getItem('note');

    try {
      const jsonNote = JSON.parse(storedValue);
      const builder = Note.builder().value(jsonNote.value);

      if (jsonNote.id) {
        builder.id(jsonNote.id);
      }
      this.note = builder.build();

      console.log('note is', this.note);
    } catch (e) {
      this.note = Note.builder()
        .value(`${storedValue}`)
        .build();
    }
  }

  noteChanged(value) {
    console.log('got', value);
    console.log('saving', value);
    this.note.value = value;
    localStorage.setItem('note', this.note.toString());
  }
}
