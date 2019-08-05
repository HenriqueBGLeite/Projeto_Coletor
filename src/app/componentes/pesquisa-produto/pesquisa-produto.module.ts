import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProdutoComponent } from './pesquisa-produto.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [PesquisaProdutoComponent],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    KeyFilterModule
  ]
})

export class PesquisaProdutoModule { }
