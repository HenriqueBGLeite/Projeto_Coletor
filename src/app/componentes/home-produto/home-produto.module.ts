import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { HomeProdutoComponent } from './home-produto.component';

@NgModule({
  declarations: [
    HomeProdutoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule
  ]
})
export class HomeProdutoModule { }
