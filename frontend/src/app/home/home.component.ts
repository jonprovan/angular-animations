import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('moveBoxes', [
      state('tl', style({top: '0%', left: '0%'})),
      state('tr', style({top: '0%', left: '90%'})),
      state('bl', style({top: '90%', left: '0%'})),
      state('br', style({top: '90%', left: '90%'})),
      transition('* => *', [
        animate('1s ease-in-out')
      ])
    ])
  ]
    
})
export class HomeComponent {

  positions: string[] = [ 'tl', 'tr', 'br', 'bl' ];

  clockwise() {
    this.positions = [ ...this.positions.slice(1, 4), this.positions[0] ];
  }
  
  counterClockwise() {
    this.positions = [ this.positions[3], ...this.positions.slice(0, 3) ];
  }


}

  

