import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [],
  templateUrl: './method.component.html',
  styleUrl: './method.component.css'
})
export class MethodComponent {

  @Input() method?: string[];

}
