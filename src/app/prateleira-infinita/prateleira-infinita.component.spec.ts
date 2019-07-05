import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrateleiraInfinitaComponent } from './prateleira-infinita.component';

describe('PrateleiraInfinitaComponent', () => {
  let component: PrateleiraInfinitaComponent;
  let fixture: ComponentFixture<PrateleiraInfinitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrateleiraInfinitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrateleiraInfinitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
