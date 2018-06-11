import { DashboardStateManagementModule } from './dashboard-state-management/dashboard-state-management.module';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { NotesStateManagementModule } from './notes-state-management/notes-state-management.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NotesStateManagementModule,
    DashboardStateManagementModule
  ],
  exports: []
})
export class StateManagementModule {}
