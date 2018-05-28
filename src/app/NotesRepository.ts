import { Injectable } from '@angular/core';
import { Note } from './Note';

const ALL_NOTE_IDS = 'allNoteIds';

@Injectable({
  providedIn: 'root'
})
export class NotesRepository {
  constructor() {}

  private findById(noteId: string): Note {
    const value = localStorage.getItem(noteId);

    if (value === null) {
      throw new Error('Note not found');
    }

    return Note.builder()
      .id(noteId)
      .value(value)
      .build();
  }

  findAll(): Note[] {
    return this.getAllNoteIds().map(id => this.findById(id));
  }

  save(note: Note): void {
    const ids = this.getAllNoteIds();
    const { id, value } = note;

    localStorage.setItem(id, value);

    if (!ids.includes(id)) {
      this.saveAllNoteIds([...ids, id]);
    }
  }

  remove(id: string) {
    const ids = this.getAllNoteIds();

    localStorage.removeItem(id);
    this.saveAllNoteIds(ids.filter(it => it !== id));
  }

  private getAllNoteIds(): string[] {
    const allNoteIds = localStorage.getItem(ALL_NOTE_IDS);

    if (!allNoteIds) {
      return [];
    }

    return JSON.parse(allNoteIds);
  }

  private saveAllNoteIds(value: string[]): void {
    localStorage.setItem(ALL_NOTE_IDS, JSON.stringify(value));
  }
}
