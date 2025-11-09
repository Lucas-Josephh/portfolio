import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-tech',
  imports: [],
  standalone: true,
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  @Input() lib = "";
}
