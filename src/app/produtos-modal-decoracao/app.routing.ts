import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao.component';
import { DecoracaoCategoriasComponent } from './decoracao-categorias/decoracao-categorias.component';
import { DecoracaoProdutosComponent } from './decoracao-produtos/decoracao-produtos.component';


const APP_ROUTES: Routes = [
  { path: '', component: DecoracaoCategoriasComponent },
  { path: 'tapetes', component: DecoracaoProdutosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);

