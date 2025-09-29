import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BookComponent } from '../../shared/book/book.component';
import { PcSVGComponent } from '../../shared/svg/pc/pcSVG.component';
import { BookSVGComponent } from '../../shared/svg/book/bookSVG.component';
import { CodeSVGComponent } from '../../shared/svg/code/codeSVG.component';
import { MailSVGComponent } from '../../shared/svg/mail/mailSVG.component';
import { RouterLink } from '@angular/router';
import { ArrowSVGComponent } from '../../shared/svg/arrow/arrowSVG.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NavbarComponent, PcSVGComponent, BookSVGComponent, CodeSVGComponent, MailSVGComponent, ArrowSVGComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {}
