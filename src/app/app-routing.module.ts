import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaProdutoComponent } from './componentes/pesquisa-produto/pesquisa-produto.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';

const routes: Routes = [
  //Rota default do projeto
  { path: '', redirectTo: '/pesquisa-produto', pathMatch: 'full' },
    
  //Rotas para pesquisar produto
  { path: 'pesquisa-produto', component: PesquisaProdutoComponent,  },
  { path: 'inventario', component: InventarioComponent,  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
