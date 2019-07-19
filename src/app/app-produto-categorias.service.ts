import { Observable } from 'rxjs';
// import 'rxjs/add/operator/observable';


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import { Categoria } from './categoria';
import { tap, delay, take, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Produtospisoserevestimentos } from './produtospisoserevestimentos';
import { Subcategoria1 } from './subcategoria1';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppProdutoCategoriasService {

  private readonly API = `${environment.API}categorias`;
  // private readonly API2 = `${environment.API}subcategoria-pisos-e-revestimentos`;
  // private readonly API3 = `${environment.API}subcategoria-pisos-e-revestimentos-produtos`;



   constructor(private http: HttpClient) { }


 // aula 2
  // categorias(): Observable<Categoria[]>{
  //    return this.http.get(this.API)
  //   .map(response => response.json())
  //  }



  // método list retorna o observable que faz a chamada http para a base de dados json
 list() {
      // let params: HttpParams = undefined
      // if (search){
      //   params = new HttpParams().append('q', search)
      // }
      return this.http.get<Categoria[]>(this.API)
     // .map( response => response.json())
      .pipe(
      // delay (2000),
        take(1),
        tap(console.log)
      );
    }



    // categorias(search?: string): Observable<Categoria[]> {
    //   let params: HttpParams = null;
    //   if (search) {
    //     params = new HttpParams().append('q', search)
    //   }
    //   return this.http.get<Categoria[]>(this.API, {params: params})
    // }








}
