import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto.component';
import { PanelModule } from 'primeng/panel';
import { TabelaModule } from '../tabela/tabela.module';
import { ButtonModule } from 'primeng/button';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'ng-block-ui';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TabViewModule } from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    TabelaModule,
    ButtonModule,
    FormsModule,
    BlockUIModule,
    TabViewModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule,
    ConfirmDialogModule

  ], providers: [MessageService, ConfirmationService]
})
export class ListaProdutoModule { }
