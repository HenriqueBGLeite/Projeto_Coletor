import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInventarioComponent } from './home-inventario.component';
import { PanelModule } from 'primeng/panel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoInventarioComponent } from './endereco-inventario/endereco-inventario.component';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InventarioComponent } from './inventario/inventario.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { BlockUIModule } from 'ng-block-ui';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    HomeInventarioComponent, EnderecoInventarioComponent, InventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    KeyFilterModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    BlockUIModule,
    ReactiveFormsModule,
    InputMaskModule
  ], providers: [MessageService]
})
export class HomeInventarioModule { }
