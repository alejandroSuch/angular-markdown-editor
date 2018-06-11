import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDeleteNoteComponent } from './confirm-delete-note/confirm-delete-note.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorComponent } from './dashboard/editor/editor.component';
import { MarkDown2HTMLPipe } from './dashboard/preview/markdown2html.pipe';
import { MaterialModule } from './shared/material.module';
import { MyNavComponent } from './my-nav/my-nav.component';
import { NgModule } from '@angular/core';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { StateManagementModule } from './state-management/state-management.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyNavComponent,
    EditorComponent,
    PreviewComponent,
    MarkDown2HTMLPipe,
    ConfirmDeleteNoteComponent
  ],
  entryComponents: [ConfirmDeleteNoteComponent],
  imports: [BrowserModule, MaterialModule, StateManagementModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
