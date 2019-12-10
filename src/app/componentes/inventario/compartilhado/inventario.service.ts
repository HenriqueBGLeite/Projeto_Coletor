import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProdutoInventario } from './produto-inventario.model';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  urlApi = environment.urlApi.concat('/Inventario/');

  constructor(private httpClient: HttpClient) { }

  public buscarProduto(filtro: string){
    return this.httpClient.get(`${this.urlApi}getProdutoInventario/${filtro}`);
  }

  public salvar(produto: ProdutoInventario){
    return this.httpClient.post(`${this.urlApi}metodoPost/`, produto);
  }

}
