import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPuzzleComponent } from '../sliding-puzzle/sliding-puzzle.component';

describe('SlidingPuzzleComponent', () => {
  let component: SlidingPuzzleComponent;
  let fixture: ComponentFixture<SlidingPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingPuzzleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidingPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
