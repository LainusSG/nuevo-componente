import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionMaterialQuirofanoComponent } from './recepcion-material-quirofano.component';

describe('RecepcionMaterialQuirofanoComponent', () => {
  let component: RecepcionMaterialQuirofanoComponent;
  let fixture: ComponentFixture<RecepcionMaterialQuirofanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionMaterialQuirofanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionMaterialQuirofanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
