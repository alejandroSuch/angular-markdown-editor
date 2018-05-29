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
      this.initialized = true;
      this.notes = this.notesRepository.findAll();
    }

    return this.notes;
  }

  get(id: string): Note {
    return this.notes.find(it => it.id === id) || null;
  }

  save(note: Note): void {
    this.notesRepository.save(note);

    if (!this.notes.some((it: Note) => it.id === note.id)) {
      this.notes = [...this.notes, note];
    } else {
      this.notes = this.notes.map((it: Note) => (it.id === note.id ? note : it));
    }
  }

  remove(note: Note) {
    this.notesRepository.remove(note.id);
    this.notes = this.notes.filter(_note => _note.id !== note.id);
  }
}
