import { Component, Input, OnDestroy } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SkillSVGComponent } from '../svg/skill/skill.component';
import { ProfilSVGComponent } from '../svg/profil/profil.component';
import { ProjectSVGComponent } from '../svg/project/project.component';
import { ContactSVGComponent } from '../svg/contact/contact.component';
import { AdminSVGComponent } from '../svg/admin/admin.component';
import { PasswordExistService } from '../../services/passwordExist';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckPasswordService } from '../../services/checkPassword';
import { HashPasswordService } from '../../services/hashPassword';

@Component({
  selector: 'extranet-navbar',
  imports: [RouterLink, ReactiveFormsModule, ProfilSVGComponent, SkillSVGComponent, ProjectSVGComponent, ContactSVGComponent, AdminSVGComponent],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  @Input() page = '';
  mdpForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private _passwordExistService: PasswordExistService, 
    private _checkPasswordService: CheckPasswordService, 
    private _hashPasswordService: HashPasswordService,
    private router: Router
  ){
    this.mdpForm = this.fb.group({
      newmdp: ['', Validators.required],
      mdp: ['', Validators.required]      
    });
  }

  isShow = false;
  isShowSecurity = false;
  isNewMDP = true;

  showNavBar(): void {
    this.isShow = !this.isShow;
  }

  securityPass(): void {
    this.isShowSecurity = !this.isShowSecurity;
    this.toggleBodyScroll(this.isShowSecurity);
    
    if (this.isShowSecurity) {
      this._passwordExistService.passExist().subscribe({
        next: res => {
          this.isNewMDP = !res.exists;
        },
        error: err => {
          console.error('Erreur lors de la vérification de l\'existence du mot de passe:', err);
          this.isNewMDP = true;
        }
      });
    }
  }

  private toggleBodyScroll(block: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = block ? 'hidden' : '';
    }
  }

  ngOnDestroy(): void {
    this.toggleBodyScroll(false);
  }

  addNewMDP(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (!this.mdpForm.value.newmdp) {
      return;
    }

    this._hashPasswordService.hashPass(this.mdpForm.value.newmdp).subscribe({
      next: res => {
        this.isShowSecurity = false;
        this.toggleBodyScroll(false);
        this.router.navigate(['/admin']);
      },
      error: err => {
        console.error('Erreur lors de la création du mot de passe:', err);
      }
    });
  }
  
  checkMDP(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (!this.mdpForm.value.mdp) {
      return;
    }

    this._checkPasswordService.checkpass(this.mdpForm.value.mdp).subscribe({
      next: res => {
        if (res.exists) {
          this.isShowSecurity = false;
          this.toggleBodyScroll(false);
          this.router.navigate(['/admin']);
        } else {
          alert('Mot de passe incorrect');
        }
      },
      error: err => {
        console.error('Erreur lors de la vérification du mot de passe:', err);
        alert('Erreur lors de la vérification du mot de passe');
      }
    });
  }
}