import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaProdutoComponent } from './componentes/pesquisa-produto/pesquisa-produto.component';

const routes: Routes = [
  //Rotas para pesquisar produto
  { path: 'pesquisa-produto', component: PesquisaProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
