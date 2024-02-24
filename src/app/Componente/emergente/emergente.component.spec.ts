import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenteComponent } from './emergente.component';

describe('EmergenteComponent', () => {
  let component: EmergenteComponent;
  let fixture: ComponentFixture<EmergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
