import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-status',
  imports: [],
  standalone: true,
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() status = "";
}
