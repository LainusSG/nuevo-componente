import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeProgramacionComponent } from './datos-de-programacion.component';

describe('DatosDeProgramacionComponent', () => {
  let component: DatosDeProgramacionComponent;
  let fixture: ComponentFixture<DatosDeProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosDeProgramacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosDeProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
