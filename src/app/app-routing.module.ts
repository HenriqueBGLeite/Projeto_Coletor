import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConsultarProdutoComponent } from './componentes/consultar-produto/consultar-produto.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeProdutoComponent } from './componentes/home-produto/home-produto.component';
import { ListaProdutoComponent } from './componentes/lista-produto/lista-produto.component';

const routes: Routes = [
  //Rota default do projeto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    
  //Rota Login
  { path: 'login', component: LoginComponent},

  //Rota Home
  { 
    path: 'home', component: HomeComponent,
    //canActivate: [AuthGuard] 
  },
  
  //Rotas para home produto
  {
    path: 'home-produto', component: HomeProdutoComponent, 
    //canActivate: [AuthGuard] 
  },
  
  //Rotas para consultar produto
  { 
    path: 'consultar-produto', component: ConsultarProdutoComponent, 
    //canActivate: [AuthGuard] 
  },

  { 
    path: 'lista-produto', component: ListaProdutoComponent, 
    //canActivate: [AuthGuard] 
  },
  
  //Rota para inventario
  { 
    path: 'inventario', component: InventarioComponent,
    //canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
