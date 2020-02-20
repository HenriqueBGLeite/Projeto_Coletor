import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarProdutoService {

  urlApi = environment.urlApi.concat('/PesquisaProduto/');

  constructor(private httpClient: HttpClient) { }

  public buscarProduto(produto: string, filial: number){
    return this.httpClient.get(`${this.urlApi}getProduto/${produto}/${filial}`);
  }

  public buscarEndereco(produto: string, filial: number){
    return this.httpClient.get(`${this.urlApi}getEnderecoProduto/${produto}/${filial}`);
  }

  public buscarEstoque(produto: string){
    return this.httpClient.get(`${this.urlApi}getEstoqueProduto/${produto}`);
  }
}
