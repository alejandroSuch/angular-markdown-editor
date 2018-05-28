import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { EditorComponent } from './dashboard/editor/editor.component';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { MarkDown2HTMLPipe } from './dashboard/preview/markdown2html.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteNoteComponent } from './confirm-delete-note/confirm-delete-note.component';

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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
