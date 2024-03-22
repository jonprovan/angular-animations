import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simultaneous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simultaneous.component.html',
  styleUrl: '../css/simultaneous.component.css',
  // one state defined for each of the four corners
  animations: [
    trigger('moveBoxes', [
      state('tl', style({ top: '0%', left: '0%' })),
      state('tr', style({ top: '0%', left: '90%' })),
      state('bl', style({ top: '90%', left: '0%' })),
      state('br', style({ top: '90%', left: '90%' })),
      // this transition covers all changes from one state to another
      transition('* => *', [
        animate('1s ease-in-out')
      ])
    ])
  ]
    
})
export class SimultaneousComponent {

  // initial positions for the boxes that maintain each one's state
  positions: string[] = [ 'tl', 'tr', 'br', 'bl' ];

  // adjusting array values to change each box's state clockwise
  clockwise() {
    this.positions = [ ...this.positions.slice(1, 4), this.positions[0] ];
  }
  
  // adjusting array values to change each box's state counter-clockwise
  counterClockwise() {
    this.positions = [ this.positions[3], ...this.positions.slice(0, 3) ];
  }

  // moving the boxes back to their original positions
  reset() {
    this.positions = [ 'tr', 'br', 'bl', 'tl' ];
    setTimeout(() => {
      this.positions = [ 'tl', 'tr', 'br', 'bl' ];
    }, 1);
    
  }


}

  

