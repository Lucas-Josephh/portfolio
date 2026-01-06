import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'extranet-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() level = '0';
  @Input() name = '';
  @Input() color = '';

  // expose la variable CSS --percent sur l'élément host
  @HostBinding('style.--level') get cssPercent(): string {
    return `${this.level}%`;
  }
}