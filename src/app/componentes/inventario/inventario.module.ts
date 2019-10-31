import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { PanelModule } from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    KeyFilterModule,
    InputTextareaModule,
    CalendarModule,
    BlockUIModule
  ]
})
export class InventarioModule { }
