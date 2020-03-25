import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProdutoInventario } from './produto-inventario.model';


@Injectable({
  providedIn: 'root'
})

export class InventarioService {

  proxEndereco: string;
  numinvent: number;

  urlApi = environment.urlApi.concat('/Inventario/');

  constructor(private httpClient: HttpClient) { }

  //Inventario Com WMS
  public buscarProduto(produto: string, filial: number){
    return this.httpClient.get(`${this.urlApi}getProdutoInventario/${produto}/${filial}`);
  }

  public salvar(produto: ProdutoInventario){
    return this.httpClient.post(`${this.urlApi}gravaProdutoInventario/`, produto);
  }

  public buscarProxEndereco(codUsuario: number, codEndereco?: number){
    return this.httpClient.get(`${this.urlApi}getProxEndereco/${codUsuario}/${codEndereco}`);
  }

  public buscarDadosEndereco(codEndereco: string){
    return this.httpClient.get(`${this.urlApi}getDadosEndereco/${codEndereco}`);
  }

  //Inventario Sem WMS
  public buscarInventarioSemWms(codFilial: number, codUsuario: number){
    return this.httpClient.get(`${this.urlApi}getInventario/${codFilial}/${codUsuario}`)
  }

  public buscarProdutoSemWms(){
    return ('Chegou aqui');
  }

}
