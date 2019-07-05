import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletModalComponent } from './outlet-modal.component';

describe('OutletModalComponent', () => {
  let component: OutletModalComponent;
  let fixture: ComponentFixture<OutletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
