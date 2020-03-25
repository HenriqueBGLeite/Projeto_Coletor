import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConsultarProdutoComponent } from './componentes/home-produto/consultar-produto/consultar-produto.component';
import { InventarioComponent } from './componentes/home-inventario-wms/inventario/inventario.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeProdutoComponent } from './componentes/home-produto/home-produto.component';
import { ListaProdutoComponent } from './componentes/home-produto/lista-produto/lista-produto.component';
import { HomeInventarioComponent } from './componentes/home-inventario-wms/home-inventario.component';
import { EnderecoInventarioComponent } from './componentes/home-inventario-wms/endereco-inventario/endereco-inventario.component';
import { HomeInventarioSemWmsComponent } from './componentes/home-inventario-sem-wms/home-inventario-sem-wms.component';

const routes: Routes = [
  //Rota default do projeto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    
  //Rota Login
  { path: 'login', component: LoginComponent},

  //Rota Home
  { 
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  
  //Rotas para home produto
  {
    path: 'home-produto', component: HomeProdutoComponent, 
    canActivate: [AuthGuard] 
  },
 
  { 
    path: 'consultar-produto', component: ConsultarProdutoComponent, 
    canActivate: [AuthGuard] 
  },

  { 
    path: 'lista-produto', component: ListaProdutoComponent, 
    canActivate: [AuthGuard] 
  },
  
  //Rota para inventario com WMS
  { 
    path: 'home-inventario', component: HomeInventarioComponent,
    canActivate: [AuthGuard]
  }, 

  { 
    path: 'endereco-inventario', component: EnderecoInventarioComponent,
    canActivate: [AuthGuard]
  }, 

  { 
    path: 'inventario', component: InventarioComponent,
    canActivate: [AuthGuard]
  },

  //Rota para inventario sem WMS
  { 
    path: 'inventario-sem-wms', component: HomeInventarioSemWmsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
