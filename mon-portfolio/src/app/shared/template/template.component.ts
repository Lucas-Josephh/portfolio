import { Component, Input } from '@angular/core';
import { TechComponent } from '../tech/tech.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'extranet-template',
  imports: [TechComponent],
  standalone: true,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() technologie = '';
  @Input() status = '';
  @Input() url = '';
  @Input() demo = '';
  @Input() github = '';
}
