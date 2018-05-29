import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CompleteMaterialModule } from './complete-material/complete-material.module';
import { DataInspectorComponent } from './data-inspector.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormLevelComponent } from './components/dynamic-form/form-level/form-level.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementComponent } from './components/dynamic-form/form-level/form-element/form-element.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataViewComponent } from './components/data-view/data-view.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CompleteMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    DataInspectorComponent,
    NavigationComponent,
    DynamicFormComponent,
    FormLevelComponent,
    FormElementComponent,
    ListViewComponent,
    DataViewComponent
  ],
  exports: [DataInspectorComponent],
  providers: [

  ]
})
export class DataInspectorModule { }
