import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProdutoComponent } from './pesquisa-produto.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PesquisaProdutoComponent],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    FormsModule
  ]
})

export class PesquisaProdutoModule { }
