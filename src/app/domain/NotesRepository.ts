import { Injectable } from '@angular/core';
import { Note } from './Note';

const ALL_NOTE_IDS = 'allNoteIds';

@Injectable({
  providedIn: 'root'
})
export class NotesRepository {
  constructor() {}

  public findById(noteId: string): Note {
    const item = localStorage.getItem(noteId);

    if (item === null) {
      throw new Error('Note not found');
    }

    const json = JSON.parse(item);

    return Note.builder()
      .id(json.id)
      .title(json.title)
      .value(json.value)
      .dateCreated(new Date(json.dateCreated))
      .lastUpdated(new Date(json.lastUpdated))
      .build();
  }

  findAll(): Note[] {
    return this.getAllNoteIds().map(id => this.findById(id));
  }

  save(note: Note): void {
    const ids = this.getAllNoteIds();
    localStorage.setItem(note.id, note.toString());

    if (!ids.includes(note.id)) {
      this.saveAllNoteIds([...ids, note.id]);
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
