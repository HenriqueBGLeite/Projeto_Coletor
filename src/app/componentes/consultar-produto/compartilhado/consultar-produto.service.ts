import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarProdutoService {

  urlApi = environment.urlApi.concat('/PesquisaProduto/');

  constructor(private httpClient: HttpClient) { }

  public buscarProduto(filtro: string){
    console.log(`${this.urlApi}getProduto/${filtro}`);
    return this.httpClient.get(`${this.urlApi}getProduto/${filtro}`);
  }

  public buscarTodosProdutos(){
    return this.httpClient.get(`${this.urlApi}getTodosProdutos/`);
  }
}
