import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracaoProdutosComponent } from './decoracao-produtos.component';

describe('DecoracaoProdutosComponent', () => {
  let component: DecoracaoProdutosComponent;
  let fixture: ComponentFixture<DecoracaoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoracaoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoracaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
