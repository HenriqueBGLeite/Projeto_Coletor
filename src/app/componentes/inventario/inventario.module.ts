import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { PanelModule } from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    KeyFilterModule
  ]
})
export class InventarioModule { }
