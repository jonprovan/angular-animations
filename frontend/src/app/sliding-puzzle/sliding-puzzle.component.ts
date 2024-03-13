import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sliding-puzzle',
  standalone: true,
  imports: [],
  templateUrl: './sliding-puzzle.component.html',
  styleUrl: './sliding-puzzle.component.css',
  animations: [
    trigger('moveTile', [
      state('1', style({top: '0px', left: '0px'})),
      state('2', style({top: '0px', left: '100px'})),
      state('3', style({top: '0px', left: '200px'})),
      state('4', style({top: '0px', left: '300px'})),
      state('5', style({top: '100px', left: '0px'})),
      state('6', style({top: '100px', left: '100px'})),
      state('7', style({top: '100px', left: '200px'})),
      state('8', style({top: '100px', left: '300px'})),
      state('9', style({top: '200px', left: '0px'})),
      state('10', style({top: '200px', left: '100px'})),
      state('11', style({top: '200px', left: '200px'})),
      state('12', style({top: '200px', left: '300px'})),
      state('13', style({top: '300px', left: '0px'})),
      state('14', style({top: '300px', left: '100px'})),
      state('15', style({top: '300px', left: '200px'})),
      state('16', style({top: '300px', left: '300px'})),
      transition('* => *', [
        animate('0.5s ease-in-out')
      ]
      )
    ])
  ]
})
export class SlidingPuzzleComponent {

  // content and starting positions for tiles
  tiles: any[][] = [
    [1, 1], 
    [2, 2], 
    [3, 3], 
    [4, 4], 
    [5, 5], 
    [6, 6], 
    [7, 7], 
    [8, 8], 
    [9, 9], 
    [10, 10], 
    [11, 11], 
    [12, 12], 
    [13, 13], 
    [14, 14], 
    [15, 15]
  ]

  // filled status and position labels for grid slots
  grid: number[][] = [
    [1, 1], [1, 2], [1, 3], [1, 4], 
    [1, 5], [1, 6], [1, 7], [1, 8],
    [1, 9], [1, 10], [1, 11], [1, 12],
    [1, 13], [1, 14], [1, 15], [0, 16]
  ]

  // tile positions that can't move left/right
  noLeft: number[] = [5, 9, 13];
  noRight: number[] = [4, 8, 12];

  // when you click on a slide
  slide(i: number, cp: number) {

    // possible slots include above/below, plus left/right unless it wraps around
    let possibleSlots = [ 
      this.grid[cp - 5],
      (!this.noLeft.includes(cp)) ? this.grid[cp - 2] : undefined,
      (!this.noRight.includes(cp)) ? this.grid[cp] : undefined,
      this.grid[cp + 3]
    ];

    for (let slot of possibleSlots) {
      // check if possible slot exists in the grid and is empty
      if (slot && !slot[0]) {
        // hold onto previous position for this tile
        let previousPosition = this.tiles[i][1];

        // set the viable possible slot to "filled"
        slot[0] = 1;

        // set the tile's position to the new one
        this.tiles[i][1] = slot[1];

        // set the old grid position to "empty"
        this.grid[previousPosition - 1][0] = 0;
      }
    }
  }

}
