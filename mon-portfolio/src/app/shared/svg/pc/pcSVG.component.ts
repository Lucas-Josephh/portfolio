import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-svg-pc',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pcSVG.component.html',
  styleUrls: ['./pcSVG.component.scss']
})
export class PcSVGComponent {

  @Input() img = ''

}
