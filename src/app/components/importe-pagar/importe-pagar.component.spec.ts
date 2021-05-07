import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportePagarComponent } from './importe-pagar.component';

describe('ImportePagarComponent', () => {
  let component: ImportePagarComponent;
  let fixture: ComponentFixture<ImportePagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportePagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportePagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
