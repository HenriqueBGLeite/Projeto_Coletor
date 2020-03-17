import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login.component';
import { DropdownModule } from 'primeng/dropdown';
import { BlockUIModule } from 'ng-block-ui';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    BlockUIModule,
    KeyFilterModule
  ]
})
export class LoginModule { }
