import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';

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

  public buscarEstoque(produto: string, usuario: number){
    return this.httpClient.get(`${this.urlApi}getEstoqueProduto/${produto}/${usuario}`);
  }

  public buscarFilial(usuario: number){
    return this.httpClient.get(`${this.urlApi}getFiliais/${usuario}`);
  }

  public salvar(produto: Produto){
    return this.httpClient.put(`${this.urlApi}editaDadosProd/`, produto);
  }
}
