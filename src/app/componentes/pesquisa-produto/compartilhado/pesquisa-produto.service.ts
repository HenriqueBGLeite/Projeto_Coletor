import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaProdutoService {

  urlApi = environment.urlApi.concat('PesquisaProduto/');

  constructor(private httpClient: HttpClient) { }

  public buscarProduto(filtro: string){
    return this.httpClient.get(`${this.urlApi}getProdutosColetor/${filtro}`);
  }

  public buscarProdutoLista(filtro: string){
    return this.httpClient.get(`${this.urlApi}getProdutoLista/${filtro}`);
  }

  public buscarTodosProdutos(){
    return this.httpClient.get(`${this.urlApi}getTodosProdutos/`);
  }
}
