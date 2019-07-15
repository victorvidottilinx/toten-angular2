
import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao/produtos-modal-decoracao.component';
import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { OutletModalComponent } from './shared/outlet-modal/outlet-modal.component';
import { AppProdutoCategoriasService } from './app-produto-categorias.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categoria } from './categoria';
import { Subcategoria1 } from './subcategoria1';
import { Produtospisoserevestimentos } from './produtospisoserevestimentos';



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



  // categorias: Categoria[];
  categorias$: Observable<Categoria[]>;
  subcategoria1$: Observable<Subcategoria1[]>;
  produtospisoserevestimentos$: Observable<Produtospisoserevestimentos[]>;
  error$ = new Subject<boolean>();

  // pipe
  // filterargs1 = {categoria: subcategoria};
  // items = this.categorias$;

  constructor(private modalService: BsModalService,
              private service: AppProdutoCategoriasService) {}



  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.categorias = dados);

    // se inscrever no observable e listar as categorias
    // consumindo o método list

    this.onRefresh()

  }



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

    this.subcategoria1$ = this.service.list2()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        // operador do rxjs catcherror para capturar o erro e retornar outro observable
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );

    this.produtospisoserevestimentos$ = this.service.list3()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        // operador do rxjs catcherror para capturar o erro e retornar outro observable
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );

    // this.service.list()
    // .pipe(
    //   // operador do pipe
    //   catchError(error => empty())
    // )
    // .subscribe(
    //   dados => {
    //     console.log(dados);
    //   },
    //   error => console.error(error),
    //   () => console.log('Observable completo!')
    // );


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

