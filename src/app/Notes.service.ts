import { Note } from './Note';
import { NotesRepository } from './NotesRepository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private initialized: boolean = false;
  private notes: Note[] = [];

  constructor(private notesRepository: NotesRepository) {}

  getAllNotes(): Note[] {
    if (!this.initialized) {
      console.log('initializing...');
      this.initialized = true;
      this.notes = this.notesRepository.findAll();
    }

    console.log('notes are', this.notes);

    return this.notes;
  }

  get(id: string): Note {
    return this.notes.find(it => it.id === id) || null;
  }

  save(note: Note): void {
    this.notesRepository.save(note);
    this.notes = [...this.notes, note];
  }

  remove(note: Note) {
    this.notesRepository.remove(note.id);
    this.notes = this.notes.filter(_note => _note.id !== note.id);
  }
}
