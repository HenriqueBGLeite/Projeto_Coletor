import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarProdutoComponent } from './consultar-produto.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'ng-block-ui';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProdutoEstoqueComponent } from './produto-estoque/produto-estoque.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { ConsultarProdutoRoutingModule } from './consultar-produto.routing.module';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    ConsultarProdutoComponent, 
    ProdutoEstoqueComponent, 
    ProdutoHomeComponent
  ],
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
    BlockUIModule,
    KeyFilterModule,
    TabViewModule,
    InputTextareaModule,
    ConsultarProdutoRoutingModule,
    InputTextModule
  ], providers: [MessageService]
})

export class ConsultarProdutoModule { }