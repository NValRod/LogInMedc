import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  declarations: [
    SignInComponent,
  ],

  exports:[
    SignInComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class SignInModule { }
