import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionTablaComponent } from './recepcion-tabla.component';

describe('RecepcionTablaComponent', () => {
  let component: RecepcionTablaComponent;
  let fixture: ComponentFixture<RecepcionTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
