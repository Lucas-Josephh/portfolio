import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillSVGComponent } from '../svg/skill/skill.component';
import { ProfilSVGComponent } from '../svg/profil/profil.component';
import { ProjectSVGComponent } from '../svg/project/project.component';
import { ContactSVGComponent } from '../svg/contact/contact.component';
import { AdminSVGComponent } from '../svg/admin/admin.component';

@Component({
  selector: 'extranet-navbar',
  imports: [RouterLink, ProfilSVGComponent, SkillSVGComponent, ProjectSVGComponent, ContactSVGComponent, AdminSVGComponent],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() page = '';

  isShow = false;

  showNavBar(): void {
    this.isShow = !this.isShow;
  }
}