import v4 from 'uuid/v4';

export class Note {
  id: string;
  title: string;
  value: string;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(id, title, value, dateCreated, lastUpdated) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  clone(): Note {
    return Note.builder()
      .id(this.id)
      .title(this.title)
      .value(this.value)
      .dateCreated(this.dateCreated)
      .lastUpdated(this.lastUpdated)
      .build();
  }

  static builder() {
    return new NoteBuilder();
  }

  toString(): string {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      value: this.value,
      dateCreated: this.dateCreated,
      lastUpdated: this.lastUpdated
    });
  }
}

export class NoteBuilder {
  private _id: string;
  private _value: string;
  private _title: string;
  private _dateCreated: Date;
  private _lastUpdated: Date;

  constructor() {
    this._id = v4();
    this._title = `${this._id
      .split('-')
      .pop()
      .substr(5)}`;
    this._dateCreated = new Date();
    this._lastUpdated = new Date();
    this._value = `# New note

  this is a new note`;
  }

  public id(id: string): NoteBuilder {
    this._id = id;
    return this;
  }

  public value(value: string): NoteBuilder {
    this._value = value;
    return this;
  }

  public title(title: string): NoteBuilder {
    this._title = title;
    return this;
  }

  public dateCreated(dateCreated: Date): NoteBuilder {
    this._dateCreated = dateCreated;
    return this;
  }

  public lastUpdated(lastUpdated: Date): NoteBuilder {
    this._lastUpdated = lastUpdated;
    return this;
  }

  build(): Note {
    return new Note(this._id, this._title, this._value, this._dateCreated, this._lastUpdated);
  }
}
