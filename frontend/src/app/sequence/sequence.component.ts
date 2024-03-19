import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-sequence',
  standalone: true,
  imports: [],
  templateUrl: './sequence.component.html',
  styleUrl: './sequence.component.css',
  // state outlines an individual set of CSS values
  // here, transitions trigger sequences of events
  animations: [
    trigger('boxTrack', [
      state('default', style({ top: '0%', left: '0%' })),
      transition('* => forward', [
        sequence([
          animate('.5s ease-in-out', style({ top: '0%', left: '45%' })),
          animate('.5s ease-in-out', style({ top: '45%', left: '45%' })),
          animate('.5s ease-in-out', style({ top: '45%', left: '0%' })),
          animate('.5s ease-in-out', style({ top: '90%', left: '0%' })),
          animate('.5s ease-in-out', style({ top: '90%', left: '90%' })),
          animate('1000s', style({ top: '90%', left: '90%' }))
        ])
      ]),
      transition('* => backward', [
        sequence([
          animate('.5s ease-in-out', style({ top: '90%', left: '0%' })),
          animate('.5s ease-in-out', style({ top: '45%', left: '0%' })),
          animate('.5s ease-in-out', style({ top: '45%', left: '45%' })),
          animate('.5s ease-in-out', style({ top: '0%', left: '45%' })),
          animate('.5s ease-in-out', style({ top: '0%', left: '0%' }))
        ])
      ])
    ])
  ]
})
export class SequenceComponent {

  // this string maintains the box's position/state/sequence
  direction: string = 'default';

  // button control, dependent on where we are in the sequences
  forwardDisabled: boolean = false;
  backwardDisabled: boolean = true;

  // a timeout we can define/cancel
  timeout: any = undefined;

  // logic to change the box's state/sequence and enable/disable buttons
  switchDirection(direction: string) {
    this.direction = direction;

    // all of this is just to enable/disable the buttons
    if (direction === 'forward') {
      this.forwardDisabled = true;
      this.timeout = setTimeout(() => {
        this.backwardDisabled = false;
      }, 2500);
    } else if (direction === 'backward') {
      this.backwardDisabled = true;
      this.timeout = setTimeout(() => {
        this.forwardDisabled = false;
        this.direction = 'default';
      }, 2500);
    } else {
      clearTimeout(this.timeout);
      this.forwardDisabled = false;
      this.backwardDisabled = true;
    }
  }

}
