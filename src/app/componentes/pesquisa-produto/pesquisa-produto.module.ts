import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProdutoComponent } from './pesquisa-produto.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [PesquisaProdutoComponent],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    BlockUIModule
  ]
})

export class PesquisaProdutoModule { }
