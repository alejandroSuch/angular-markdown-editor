import v4 from 'uuid/v4';

export class Note {
  id: string;
  value: string;

  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  static builder() {
    return new NoteBuilder();
  }

  toString(): string {
    return JSON.stringify({
      id: this.id,
      value: this.value
    });
  }
}

export class NoteBuilder {
  private _id: string;
  private _value: string;

  constructor() {
    this._id = v4();
  }

  public id(id: string): NoteBuilder {
    this._id = id;
    return this;
  }

  public value(value: string): NoteBuilder {
    this._value = value;
    return this;
  }

  build(): Note {
    return new Note(this._id, this._value);
  }
}
