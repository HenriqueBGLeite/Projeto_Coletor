import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConsultarProdutoComponent } from './componentes/consultar-produto/consultar-produto.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  //Rota default do projeto
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    
  //Rota Home
  { path: 'home', component: HomeComponent },
  
  //Rotas para consultar produto
  { path: 'consultar-produto', component: ConsultarProdutoComponent },
  
  //Rota para inventario
  { path: 'inventario', component: InventarioComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
