import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sliding-puzzle',
  standalone: true,
  imports: [],
  templateUrl: './sliding-puzzle.component.html',
  styleUrl: './sliding-puzzle.component.css',
  animations: [
    trigger('moveBlocks', [
      state('p1', style({top: '0px', left: '0px'})),
      state('p2', style({top: '0px', left: '100px'})),
      state('p3', style({top: '0px', left: '200px'})),
      state('p4', style({top: '0px', left: '300px'})),
      state('p5', style({top: '100px', left: '0px'})),
      state('p6', style({top: '100px', left: '100px'})),
      state('p7', style({top: '100px', left: '200px'})),
      state('p8', style({top: '100px', left: '300px'})),
      state('p9', style({top: '200px', left: '0px'})),
      state('p10', style({top: '200px', left: '100px'})),
      state('p11', style({top: '200px', left: '200px'})),
      state('p12', style({top: '200px', left: '300px'})),
      state('p13', style({top: '300px', left: '0px'})),
      state('p14', style({top: '300px', left: '100px'})),
      state('p15', style({top: '300px', left: '200px'})),
      state('p16', style({top: '300px', left: '300px'})),
      transition('* => *', [
        animate('1s ease-in-out')
      ]
      )
    ])
  ]
})
export class SlidingPuzzleComponent {

  nums: any[][] = [
    [1, 'p1'], 
    [2, 'p2'], 
    [3, 'p3'], 
    [4, 'p4'], 
    [5, 'p5'], 
    [6, 'p6'], 
    [7, 'p7'], 
    [8, 'p8'], 
    [9, 'p9'], 
    [10, 'p10'], 
    [11, 'p11'], 
    [12, 'p12'], 
    [13, 'p13'], 
    [14, 'p14'], 
    [15, 'p15']
  ]

  grid: any[][][] = [
    [
      [1, 'p1'], [1, 'p2'], [1, 'p3'], [1, 'p4'], 
    ],
    [
      [1, 'p5'], [1, 'p6'], [1, 'p7'], [1, 'p8']
    ],
    [
      [1, 'p9'], [1, 'p10'], [1, 'p11'], [1, 'p12']
    ],
    [
      [1, 'p13'], [1, 'p14'], [1, 'p15'], [0, 'p16']
    ],
    
  ]

  slide(i: number) {
    for (let row of this.grid) {
      for (let column of row) {
        if (this.nums[i][1] === 'p15') {
          this.nums[i][1] = 'p16';
        }
      }
    }
  }

}
