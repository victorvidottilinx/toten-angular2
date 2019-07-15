
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Produtospisoserevestimentos } from './produtospisoserevestimentos';
import { Subcategoria1 } from './subcategoria1';

@Injectable({
  providedIn: 'root'
})
export class AppProdutoCategoriasService {

  private readonly API = `${environment.API}categorias`;
  private readonly API2 = `${environment.API}subcategoria-pisos-e-revestimentos`;
  private readonly API3 = `${environment.API}subcategoria-pisos-e-revestimentos-produtos`;



  constructor(private http: HttpClient) { }


  // método list retorna o observable que faz a chamada http para a base de dados json
  list() {
    return this.http.get<Categoria[]>(this.API)
    .pipe(
      // delay (2000),
      take(1),
      tap(console.log)
    );
  }

  list2() {
    return this.http.get<Subcategoria1[]>(this.API2)
    .pipe(
      // delay (2000),
      take(1),
      tap(console.log)
    );
  }

  list3() {
    return this.http.get<Produtospisoserevestimentos[]>(this.API3)
    .pipe(
      // delay (2000),
      take(1),
      tap(console.log)
    );
  }




}
