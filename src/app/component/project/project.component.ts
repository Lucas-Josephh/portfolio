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
  select: 'all' | 'finish' | 'progress' = 'all';
  data: any[] = [];
  filtered: any[] = [];
  page: number = 1;
  pageSize = 3;

  constructor(private getDataService: GetDataService){}

  ngOnInit(): void {
    this.getDataService.getData("project").subscribe({
      next: res => {
        this.data = res;
        this.applyFilter();
      },
      error: err => console.error(err)
    });
  }

  private applyFilter(): void {
    switch (this.select) {
      case 'finish':
        this.filtered = this.data.filter(p => p.status === 'Terminé');
        break;
      case 'progress':
        this.filtered = this.data.filter(p => p.status === 'En cours');
        break;
      default:
        this.filtered = [...this.data];
    }

    // reset page si dépasse le nb de pages
    const totalPages = this.totalPages;
    if (this.page > totalPages) {
      this.page = totalPages || 1;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filtered.length / this.pageSize);
  }

  get showPagination(): boolean {
    return this.filtered.length > this.pageSize;
  }

  get paginated(): any[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page += 1;
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page -= 1;
    }
  }

  selectedOption(choose: string): void {
    this.select = choose as any;
    this.page = 1;
    this.applyFilter();
  }
}

