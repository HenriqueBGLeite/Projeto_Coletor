import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaProdutoService {

  urlApi = environment.urlApi.concat('buscaProduto');

  constructor(private httpClient: HttpClient) { }

  public buscarProduto(id: string){
    return this.httpClient.get(`${this.urlApi}/${id}`);
  }
}
