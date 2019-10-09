import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralModule } from './componentes/menu-lateral/menu-lateral.module';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { PesquisaProdutoModule } from './componentes/pesquisa-produto/pesquisa-produto.module';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MessageServiceUtil } from 'src/Util/message-service-util.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuLateralModule,
    BrowserAnimationsModule,
    SidebarModule,
    GalleriaModule,
    PesquisaProdutoModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
  ],
  providers: [MessageService,
    MessageServiceUtil,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
