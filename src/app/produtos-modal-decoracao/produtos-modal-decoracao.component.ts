import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';



@Component({
  selector: 'app-produtos-modal-decoracao',
  templateUrl: './produtos-modal-decoracao.component.html',
  styleUrls: ['./produtos-modal-decoracao.component.css']
})




export class ProdutosModalDecoracaoComponent implements OnInit {




  // @ViewChild('childModal', { static: false }) childModal: ModalDirective;

  categoria: string[] = ['angular2'];

  mostrarProdutos: string = 'decoracao';

  // modalRef2: BsModalRef | null;
  // modalRef: BsModalRef;

  constructor(public bsModalRef: BsModalRef,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

 onClose(){
     this.bsModalRef.hide();
   }

   onClose2(){
    this.bsModalRef.hide();
  }



  onMostrarProdutos(categoria){
    this.mostrarProdutos = categoria;
  }


  // showChildModal(): void {
  //    this.childModal.show();
  //  }

  openModal() {
     this.bsModalRef = this.modalService.show(AlertModalComponent, { class: 'second modal-dialog modal-dialog-centered' });
   }

  openModal2() {
    this.bsModalRef = this.modalService.show(ProdutosModalDecoracaoComponent, { class: 'modal-lg modal-dialog' });
  }


  openModal3(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, { class: 'second' });
  }





}
