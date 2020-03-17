import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInventarioComponent } from './home-inventario.component';
import {PanelModule} from 'primeng/panel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeInventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    KeyFilterModule
  ]
})
export class HomeInventarioModule { }
