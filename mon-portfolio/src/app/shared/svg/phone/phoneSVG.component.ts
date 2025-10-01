import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-svg-phone',
  imports: [CommonModule, NgClass],
  standalone: true,
  templateUrl: './phoneSVG.component.html',
  styleUrls: ['./phoneSVG.component.scss']
})
export class PhoneSVGComponent {}
