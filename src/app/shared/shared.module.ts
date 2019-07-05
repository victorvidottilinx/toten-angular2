import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";
import { OutletModalComponent } from './outlet-modal/outlet-modal.component';

@NgModule({
  declarations: [AlertModalComponent, OutletModalComponent],
  imports: [CommonModule],
  exports: [AlertModalComponent],
  entryComponents: [
    AlertModalComponent,
    OutletModalComponent
  ]
})
export class SharedModule {}
