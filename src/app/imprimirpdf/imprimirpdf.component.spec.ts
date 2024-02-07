import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirpdfComponent } from './imprimirpdf.component';

describe('ImprimirpdfComponent', () => {
  let component: ImprimirpdfComponent;
  let fixture: ComponentFixture<ImprimirpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImprimirpdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprimirpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
