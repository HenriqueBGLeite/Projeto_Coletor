import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralModule } from './componentes/menu-lateral/menu-lateral.module';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { ConsultarProdutoModule } from './componentes/consultar-produto/consultar-produto.module';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MessageServiceUtil } from 'src/Util/message-service-util.service';
import { InventarioModule } from './componentes/inventario/inventario.module';
import { ToastModule } from 'primeng/toast';
import { HomeComponent } from './componentes/home/home.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './componentes/login/shared/auth.service';
import { LoginModule } from './componentes/login/login.module';
import { DropdownModule } from 'primeng/dropdown';
import { TabelaModule } from './componentes/tabela/tabela.module';
import { HomeProdutoModule } from './componentes/home-produto/home-produto.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    MenuLateralModule,
    BrowserAnimationsModule,
    SidebarModule,
    GalleriaModule,
    ConsultarProdutoModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    InventarioModule,
    ToastModule,
    CardModule,
    ButtonModule,
    LoginModule,
    TabelaModule,
    HomeProdutoModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    MessageService,
    MessageServiceUtil, AuthService, 
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
