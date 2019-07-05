import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosModalDecoracaoComponent } from './produtos-modal-decoracao.component';

describe('ProdutosModalDecoracaoComponent', () => {
  let component: ProdutosModalDecoracaoComponent;
  let fixture: ComponentFixture<ProdutosModalDecoracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosModalDecoracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosModalDecoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
