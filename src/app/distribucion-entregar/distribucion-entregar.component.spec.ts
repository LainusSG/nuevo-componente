import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionEntregarComponent } from './distribucion-entregar.component';

describe('DistribucionEntregarComponent', () => {
  let component: DistribucionEntregarComponent;
  let fixture: ComponentFixture<DistribucionEntregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistribucionEntregarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistribucionEntregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
