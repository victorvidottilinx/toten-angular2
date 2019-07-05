import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracaoCategoriasComponent } from './decoracao-categorias.component';

describe('DecoracaoCategoriasComponent', () => {
  let component: DecoracaoCategoriasComponent;
  let fixture: ComponentFixture<DecoracaoCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoracaoCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoracaoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
