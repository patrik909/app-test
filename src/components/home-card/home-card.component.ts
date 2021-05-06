import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-card',
  templateUrl: 'home-card.component.html',
  styleUrls: ['./home-card.scss']
})
export default class HomeCardComponent {

  @Input() text: string;
}
