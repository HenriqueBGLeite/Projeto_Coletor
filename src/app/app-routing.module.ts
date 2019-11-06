import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PesquisaProdutoComponent } from './componentes/pesquisa-produto/pesquisa-produto.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  //Rota default do projeto
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    
  //Rota Home
  { path: 'home', component: HomeComponent },
  
  //Rotas para pesquisar produto
  { path: 'pesquisa-produto', component: PesquisaProdutoComponent,  },
  
  //Rota para inventario
  { path: 'inventario', component: InventarioComponent,  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
