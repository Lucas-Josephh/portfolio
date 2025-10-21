import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BookComponent } from '../../shared/book/book.component';
import { LinkedInSVGComponent } from '../../shared/svg/linkedIn/linkedInSVG.component';
import { GithubSVGComponent } from '../../shared/svg/github/githubSVG.component';
import { MailSVGComponent } from '../../shared/svg/mail/mailSVG.component';
import { PhoneSVGComponent } from '../../shared/svg/phone/phoneSVG.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, CardComponent, BookComponent, LinkedInSVGComponent, GithubSVGComponent, MailSVGComponent, PhoneSVGComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

  isHide = true;

  showActivities() : void {
    this.isHide = !this.isHide;
  }
}
