import { Categoria } from './categoria';


import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao/produtos-modal-decoracao.component';
import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { OutletModalComponent } from './shared/outlet-modal/outlet-modal.component';
import { AppProdutoCategoriasService } from './app-produto-categorias.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
  @ViewChild('deleteModal') deleteModal;

  // categoria selecionada
  categoriaSelecionada: Categoria;


  // categorias: Categoria[];

  categorias$: Observable<Categoria[]>;
  error$ = new Subject<boolean>();


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

  openModal2() {
    this.bsModalRef = this.modalService.show(ProdutosModalDecoracaoComponent, { class: 'modal-lg modal-dialog' });
  }

  openModal3(categoria) {
    this.categoriaSelecionada = categoria;
    this.bsModalRef = this.modalService.show(ProdutosModalDecoracaoComponent, { class: 'modal-lg modal-dialog' });
  }

  // openModal4() {
  //   this.bsModalRef = this.modalService.show();
  // }


  onClose4() {
    this.deleteModal.hide();
  }



}

