import * as fromNotes from './reducers';
import { AllNotesEffects } from './effects/AllNotesEffects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { SelectedNoteEffects } from './effects/SelectedNoteEffects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature('notes', fromNotes.reducers),
    EffectsModule.forFeature([AllNotesEffects, SelectedNoteEffects])
  ],
  declarations: []
})
export class NotesStateManagementModule {}
