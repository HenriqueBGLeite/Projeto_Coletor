import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TabelaComponent } from './tabela.component';
import { TabelaService } from './tabela.service';

@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    TableModule
  ], 
  exports: [TabelaComponent],
  providers: [TabelaService]
})
export class TabelaModule { }
