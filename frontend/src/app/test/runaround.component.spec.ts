import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimultaneousComponent } from '../simultaneous/simultaneous.component';

describe('RunaroundComponent', () => {
  let component: SimultaneousComponent;
  let fixture: ComponentFixture<SimultaneousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimultaneousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimultaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
