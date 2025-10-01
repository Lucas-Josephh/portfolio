import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BookComponent } from '../../shared/book/book.component';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, BookComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {}
