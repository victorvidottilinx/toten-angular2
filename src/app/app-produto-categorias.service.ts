
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppProdutoCategoriasService {

  private readonly API = `${environment.API}categorias`;

  constructor(private http: HttpClient) { }


  // método list retorna o observable que faz a chamada http para a base de dados json
  list() {
    return this.http.get<Categoria[]>(this.API)
    .pipe(
      //delay (2000),
      take(1),
      tap(console.log)
    );
  }



}
