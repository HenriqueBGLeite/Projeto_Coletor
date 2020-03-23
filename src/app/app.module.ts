import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralModule } from './componentes/menu-lateral/menu-lateral.module';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { MessageServiceUtil } from 'src/Util/message-service-util.service';
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
import { HomeInventarioModule } from './componentes/home-inventario/home-inventario.module';
import { AuthGuard } from './guard/auth.guard';



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
    HttpClientModule,
    BlockUIModule.forRoot(),
    ToastModule,
    CardModule,
    ButtonModule,
    LoginModule,
    TabelaModule,
    HomeProdutoModule,
    HomeInventarioModule,
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    MessageService,
    MessageServiceUtil, AuthService, AuthGuard, 
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
