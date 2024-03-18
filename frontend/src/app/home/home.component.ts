import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MethodComponent } from '../method/method.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MethodComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('listAppear', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, left: 75, top: 50 }),
          stagger(300, [
            animate('0.5s', style({ opacity: 1, left: 0, top: 0 }))
          ])
        ])
      ])
    ])
  ]
    
})
export class HomeComponent {

  methodList: string[][] = [
    ['trigger()', 'Creates a named animation trigger, containing a list of state() and transition() entries.'],
    ['state()', 'Declares an animation state within a trigger attached to an element.'],
    // ['style()', 'Declares a key/value object containing CSS properties/styles.'],
    ['transition()', 'Declares an animation transition which is played when a certain specified condition is met.'],
    ['animate()', 'Defines an animation step that combines styling information with timing information.']
  ]

  extraMethods: string[][] = [
    ['query()', 'Finds inner elements within the current element that are being animated within a sequence..'],
    ['stagger()', 'Use within an animation query() call to issue a timing gap after each queried item is animated.'],
    ['group()', 'Defines a list of animation steps to be run simultaneously in parallel.'],
    ['sequence()', 'Defines a list of animation steps to be run sequentially, one by one.']
  ]

  addMethod() {
    this.methodList.push(this.extraMethods.shift() || []);
  }

  removeMethod() {
    this.extraMethods.unshift(this.methodList.pop() || []);
  }

  addAllMethods() {
    let length = this.extraMethods.length;

    for (let i = 0; i < length; i++) {
      this.addMethod();
    }
  }

  removeAllMethods() {
    let length = this.methodList.length;

    for (let i = 0; i < length; i++) {
      this.extraMethods.unshift(this.methodList.pop() || []);
    }
  }
  
}

  

