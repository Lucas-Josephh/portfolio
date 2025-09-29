import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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
