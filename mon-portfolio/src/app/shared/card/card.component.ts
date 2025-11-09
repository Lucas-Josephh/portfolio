import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-card',
  imports: [],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = "";
  @Input() lib = "";
}
