import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-tag',
  imports: [],
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() lib = "";
}
