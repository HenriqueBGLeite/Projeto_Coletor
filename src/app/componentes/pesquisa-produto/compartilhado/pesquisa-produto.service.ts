import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaProdutoService {

  //urlApi = environment.urlApi.concat('PesquisaProduto/getProdutosColetor/');
  urlApiTeste = environment.urlApi.concat('PesquisaProduto/getTodosProdutos/');

  constructor(private httpClient: HttpClient) { }

  /*public buscarProduto(filtro: string){
    return this.httpClient.get(`${this.urlApi}${filtro}`);
  }*/

  public testeApi(){
    return this.httpClient.get(`${this.urlApiTeste}`);
  }
}
