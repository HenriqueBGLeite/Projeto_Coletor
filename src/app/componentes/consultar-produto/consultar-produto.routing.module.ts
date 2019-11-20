import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { ProdutoEstoqueComponent } from './produto-estoque/produto-estoque.component';

const produtoRoutes = [
    { path: 'home', component: ProdutoHomeComponent },
    { path: 'estoque', component: ProdutoEstoqueComponent }
];

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
})
export class ConsultarProdutoRoutingModule {}