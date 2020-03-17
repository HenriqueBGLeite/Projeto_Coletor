import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListaProdutoService {

  urlApi = environment.urlApi.concat('/PesquisaProduto/');

  constructor(private httpClient: HttpClient) { }

  public buscarEnderecoPicking(produto: string, filial: number){
    return this.httpClient.get(`${this.urlApi}getEnderecoProdutoPicking/${produto}/${filial}`);
  }

}
