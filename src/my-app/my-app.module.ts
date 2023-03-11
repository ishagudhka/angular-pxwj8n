import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppComponent } from './my-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ProfessionalFormComponent } from './professional-form/professional-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';

@NgModule({
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    MyAppComponent,
    PersonalFormComponent,
    ProfessionalFormComponent,
  ],
  bootstrap: [MyAppComponent],
  providers: [MyServiceService],
})
export class MyAppModule {}
