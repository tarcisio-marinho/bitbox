import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswdComponent } from './passwd.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; 
import { PasswdService } from './passwd.services';

@NgModule({
  declarations: [
    PasswdComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[PasswdService]
})
export class PasswdModule { }
