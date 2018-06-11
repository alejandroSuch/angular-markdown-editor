import parseMarkdown from 'parse-markdown-js';
import { Note } from '../../domain/Note';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown2HTML'
})
export class MarkDown2HTMLPipe implements PipeTransform {
  transform(note: Note): any {
    if (!!note) {
      return parseMarkdown(note.value);
    }

    return '';
  }
}
