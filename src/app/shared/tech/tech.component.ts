import { Component, Input } from '@angular/core';

@Component({
  selector: 'extranet-tech',
  imports: [],
  standalone: true,
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  @Input() lib: string | string[] = "";

  get items(): string[] {
    if (Array.isArray(this.lib)) return this.lib;
    if (typeof this.lib === 'string') {
      return this.lib.split(',').map((t) => t.trim()).filter(Boolean);
    }
    return [];
  }
}
