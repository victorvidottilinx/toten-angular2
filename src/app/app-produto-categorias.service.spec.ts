import { TestBed } from '@angular/core/testing';

import { AppProdutoCategoriasService } from './app-produto-categorias.service';

describe('AppProdutoCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppProdutoCategoriasService = TestBed.get(AppProdutoCategoriasService);
    expect(service).toBeTruthy();
  });
});
