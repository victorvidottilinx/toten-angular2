
import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao/produtos-modal-decoracao.component';
import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { OutletModalComponent } from './shared/outlet-modal/outlet-modal.component';
import { AppProdutoCategoriasService } from './app-produto-categorias.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Categoria } from './categoria';
import { Subcategoria1 } from './subcategoria1';
import { Produtospisoserevestimentos } from './produtospisoserevestimentos';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primeiro-projeto';
  bsModalRef: BsModalRef;







  // mostrar popup no template
  // deleteModalRef: BsModalRef;
  // @ViewChild('deleteModal') deleteModal;
  @ViewChild('templateProdutos') templateProdutos;
  @ViewChild('templateOutlet') templateOutlet;


  // categoria selecionada - inicializando a variável
  categoriaSelecionada: any;


  categorias: Categoria[];
  // categorias: Categoria[];
  categorias$: Observable<Categoria[]>;
  subcategoria1$: Observable<Subcategoria1[]>;
  produtospisoserevestimentos$: Observable<Produtospisoserevestimentos[]>;
  error$ = new Subject<boolean>();

  // barra de busca - códigos
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private modalService: BsModalService,
              private service: AppProdutoCategoriasService,
              private fb: FormBuilder) {}



  ngOnInit() {

    // codigos do formulario de busca
    // instancia do searchControl
      this.searchControl = this.fb.control('');
      this.searchForm = this.fb.group({
        searchControl: this.searchControl
      });



      //  this.searchControl.valueChanges
      //   .pipe(
      //     debounceTime(500),
      //     distinctUntilChanged(),
      //     switchMap(searchTerm =>
      //       this.AppProdutoCategoriasService
      //         .categorias(searchTerm)
      //         .pipe(catchError(error => from([]))))
      //     ).subscribe(categorias => this.categorias = categorias)


      //     this.AppProdutoCategoriasService.categorias()
      //       .subscribe(categoria => this.categorias = categoria)







      // voltar
      // this.searchControl.valueChanges
      //   .subscribe(searchTerm => console.log(searchTerm));


      // BUSCA
      //  this.searchControl.valueChanges
      //  .switchMap(searchTerm =>
      //    this.AppProdutoCategoriasService.list(searchTerm));
      //  .subscribe(list => this.list = list);

      //  this.AppProdutoCategoriasService.list()
      //    .subscribe(list => this.list = list);



    // aula2
    // this.AppProdutoCategoriasService.categorias()
    //    .subscribe(categorias => this.categorias = categorias)



    // this.service.list()
    // .subscribe(dados => this.categorias = dados);

    // se inscrever no observable e listar as categorias
    // consumindo o método list



    // REABILITAR1
      this.onRefresh();

  }




  // REABILITAR1
    onRefresh(){
     this.categorias$ = this.service.list()
      .pipe(
       catchError(error => {
          console.error(error);
          this.error$.next(true);
          // operador do rxjs catcherror para capturar o erro e retornar outro observable
          // tslint:disable-next-line: deprecation
         return empty();
        })
      );
   }





  openModal() {
    this.bsModalRef = this.modalService.show(AlertModalComponent, { class: 'second modal-dialog-centered' });
  }

  openModal2(template) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-lg modal-dialog' });
  }

  openModal3(categoria) {
    // this.categoriaSelecionada = categoria;
    this.bsModalRef = this.modalService.show(ProdutosModalDecoracaoComponent, { class: 'modal-lg modal-dialog' });
  }


  public openModal4(template, categoria: Categoria) {
     this.categoriaSelecionada = categoria;
     // alert (this.categoriaSelecionada);
     this.bsModalRef = this.modalService.show(template, { class: 'modal-lg modal-dialog' });
   }

    onMostrarProdutos(subcategoria: Subcategoria1) {
     this.categoriaSelecionada = subcategoria;
    // alert (this.categoriaSelecionada);
   }



  onClose4() {
    this.bsModalRef.hide();
  }



}

