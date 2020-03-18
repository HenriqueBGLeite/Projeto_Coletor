import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { HomeProdutoComponent } from './home-produto.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'ng-block-ui';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { TabelaModule } from '../tabela/tabela.module';
import { ConsultarProdutoComponent } from './consultar-produto/consultar-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessageService, ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    HomeProdutoComponent, ConsultarProdutoComponent, ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    BlockUIModule,
    KeyFilterModule,
    TabViewModule,
    InputTextareaModule,
    InputTextModule,
    FieldsetModule,
    TabelaModule,
    ConfirmDialogModule,
    ScrollPanelModule
  ], providers: [MessageService, ConfirmationService]
})
export class HomeProdutoModule { }
