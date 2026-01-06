import { Component, Input } from '@angular/core';
import { TechComponent } from '../tech/tech.component';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'extranet-template',
  imports: [TechComponent, StatusComponent],
  standalone: true,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() technologie: string | string[] = '';
  @Input() status = '';
  @Input() url = '';
  @Input() demo = '';
  @Input() github = '';
}
