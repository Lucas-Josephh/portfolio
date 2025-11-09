import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MailSVGComponent } from '../../shared/svg/mail/mail.component';
import { GithubSVGComponent } from '../../shared/svg/github/github.component';
import { LinkedInSVGComponent } from '../../shared/svg/linkedin/linkedin.component';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, MailSVGComponent, GithubSVGComponent, LinkedInSVGComponent],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_3q4a4o4', 'template_ytx7wvj', e.target as HTMLFormElement, {
        publicKey: 'guC5oNkUVhSpz4Cnn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
