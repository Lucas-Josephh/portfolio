import { Component, Input } from '@angular/core';
import { MenuSVGComponent } from '../svg/menu/menuSVG.component';
import { ThemeSVGComponent } from '../svg/theme/themeSVG.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'extranet-navbar',
  imports: [CommonModule, MenuSVGComponent, ThemeSVGComponent, RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() page = '';
}
