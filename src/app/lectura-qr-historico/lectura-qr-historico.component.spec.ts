import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaQRHistoricoComponent } from './lectura-qr-historico.component';

describe('LecturaQRHistoricoComponent', () => {
  let component: LecturaQRHistoricoComponent;
  let fixture: ComponentFixture<LecturaQRHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturaQRHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturaQRHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
