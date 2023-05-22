import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerFwComponent } from './components/mat-datepicker-fw/mat-datepicker-fw.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttComponent } from './components/gantt/gantt.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PreviewPicturePanelComponent } from './components/preview-picture-panel/preview-picture-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MatDatepickerFwComponent,
    GanttComponent,
    MainLayoutComponent,
    PreviewPicturePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    GanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
