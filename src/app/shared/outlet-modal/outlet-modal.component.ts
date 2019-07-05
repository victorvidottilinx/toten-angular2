import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-outlet-modal',
  templateUrl: './outlet-modal.component.html',
  styleUrls: ['./outlet-modal.component.css']
})
export class OutletModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.bsModalRef.hide();
  }



}
