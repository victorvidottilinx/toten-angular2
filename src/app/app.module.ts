//import { ProdutosModalComponent } from './shared/produtos-modal/produtos-modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrateleiraInfinitaComponent } from './prateleira-infinita/prateleira-infinita.component';
import { SharedModule } from './shared/shared.module';
import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao/produtos-modal-decoracao.component';
import { DecoracaoProdutosComponent } from './produtos-modal-decoracao/decoracao-produtos/decoracao-produtos.component';
import { routing } from './produtos-modal-decoracao/app.routing';
import { DecoracaoCategoriasComponent } from './produtos-modal-decoracao/decoracao-categorias/decoracao-categorias.component';
import { HttpClientModule } from '@angular/common/http';

import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrateleiraInfinitaComponent,
    ProdutosModalDecoracaoComponent,
    DecoracaoProdutosComponent,
    DecoracaoCategoriasComponent,
    KeysPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    SharedModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    ProdutosModalDecoracaoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
