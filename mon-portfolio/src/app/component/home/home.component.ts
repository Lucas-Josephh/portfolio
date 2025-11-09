import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CardComponent } from '../../shared/card/card.component';
import { TagComponent } from '../../shared/tag/tag.component';
import { LocalisationSVGComponent } from '../../shared/svg/localisation/localisation.component';
import { ExperienceSVGComponent } from '../../shared/svg/experience/experience.component';
import { CodeSVGComponent } from '../../shared/svg/code/code.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CardComponent, TagComponent, LocalisationSVGComponent, ExperienceSVGComponent, CodeSVGComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {}
