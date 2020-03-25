import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { BlockUIModule } from 'ng-block-ui';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';
import { HomeInventarioSemWmsComponent } from './home-inventario-sem-wms.component';

@NgModule({
  declarations: [HomeInventarioSemWmsComponent],
  imports: [
    CommonModule,
    PanelModule,
    KeyFilterModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    BlockUIModule,
    InputMaskModule
  ], providers: [MessageService]
})
export class HomeInventarioSemWmsModule { }
