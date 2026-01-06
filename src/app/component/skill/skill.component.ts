import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { NoteComponent } from '../../shared/note/note.component';
import { SkillSVGComponent } from '../../shared/svg/skill/skill.component';
import { GetDataService } from '../../services/recover.service';
import { CategorieEnum } from '../../environment/categorie.const';
import { FrontSVGComponent } from '../../shared/svg/front/front.component';
import { BackSVGComponent } from '../../shared/svg/back/back.component';
import { BddSVGComponent } from '../../shared/svg/bdd/bdd.component';
import { DevSVGComponent } from '../../shared/svg/dev/dev.component';
import { OtherSVGComponent } from '../../shared/svg/other/other.component';

@Component({
  selector: 'app-skill',
  imports: [NavbarComponent, NoteComponent, SkillSVGComponent, FrontSVGComponent, BackSVGComponent, BddSVGComponent, DevSVGComponent, OtherSVGComponent],
  standalone: true,
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  CategorieEnum = CategorieEnum

  categorie: string[] = [
    CategorieEnum.FRONTEND,
    CategorieEnum.BACKEND,
    CategorieEnum.BDD,
    CategorieEnum.DEVOPS,
    CategorieEnum.OTHER
  ];

  projects: Record<string, string[]> = {};

  constructor(private getDataService: GetDataService){}

  ngOnInit(): void {
    this.getDataService.getData("skill").subscribe({
      next: res => {

        for(let i = 0; i < res.length; i++) {
          switch(res[i].categorie) {
            case CategorieEnum.FRONTEND: {res[i].color = "blue"; break;}
            case CategorieEnum.BACKEND: {res[i].color = "purple"; break;}
            case CategorieEnum.BDD: {res[i].color = "green"; break;}
            case CategorieEnum.DEVOPS: {res[i].color = "orangered"; break;}
            case CategorieEnum.OTHER: {res[i].color = "red"; break;}
          }
        }

        for(const cat of this.categorie) {
          for(let i = 0; i < res.length; i++) {
            if(cat === res[i].categorie) {
              if(!(cat in this.projects)) {
                this.projects[cat] = [res[i]];
              } else {
                this.projects[cat].push(res[i]);
              }
            }  
          }
        }
      },
      error: err => console.error(err)
    });
  }

  objectEntries(obj: Record<string, any>) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }
}
