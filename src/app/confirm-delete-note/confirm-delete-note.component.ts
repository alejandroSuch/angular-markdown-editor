import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'kd-confirm-delete-note',
  templateUrl: './confirm-delete-note.component.html',
  styleUrls: ['./confirm-delete-note.component.css']
})
export class ConfirmDeleteNoteComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteNoteComponent>) {}

  ngOnInit() {}
}
