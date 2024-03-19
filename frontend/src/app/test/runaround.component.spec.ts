import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunaroundComponent } from '../runaround/runaround.component';

describe('RunaroundComponent', () => {
  let component: RunaroundComponent;
  let fixture: ComponentFixture<RunaroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunaroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RunaroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
