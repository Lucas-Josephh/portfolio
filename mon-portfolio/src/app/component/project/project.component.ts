import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TemplateComponent } from '../../shared/template/template.component';
import { GetDataService } from '../../services/recover.service';

@Component({
  selector: 'app-project',
  imports: [NavbarComponent, TemplateComponent],
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  select = "all";
  data: any[] = [];
  page: number = 1;

  constructor(private getDataService: GetDataService){}

  ngOnInit(): void {
    this.getDataService.getData("project").subscribe({
      next: res => {
        this.data = res;
        console.log(this.data[1].title);
      },
      error: err => console.error(err)
    });
  }

  nextPage(_page: number): void {
    this.page = Number(_page);
  }

  previousPage(_page: number): void {
    this.page = Number(_page);
  }

  selectedOption(choose: string): void {
    this.select = choose;
  }
}

