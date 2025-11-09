import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import { CategorieEnum } from '../../environment/categorie.const';

@Component({
  selector: 'extranet-categorie',
  imports: [],
  standalone: true,
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements AfterContentInit {

  @Input() lib = "";

  isFront = false;
  isBack = false;
  isBdd = false;
  isDev = false;
  isOther= false;

  ngAfterContentInit(): void {
    setTimeout(() => {
      switch(this.lib) {
        case CategorieEnum.FRONTEND: {this.isFront = true; break;}
        case CategorieEnum.BACKEND: {this.isBack = true; break;}
        case CategorieEnum.BDD: {this.isBdd = true; break;}
        case CategorieEnum.DEVOPS: {this.isDev = true; break;}
        default: {this.isOther = true; break;}
      }
    }, 100);
  }
}
