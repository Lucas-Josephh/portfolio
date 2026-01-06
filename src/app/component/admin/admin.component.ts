import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { DataProject } from './dataProject/dataProject.component';
import { DataSkill } from './dataSkill/dataSkill.component';
import { GetDataService } from '../../services/recover.service';
import { StatusComponent } from '../../shared/status/status.component';
import { TechComponent } from '../../shared/tech/tech.component';
import { CategorieComponent } from '../../shared/categorie/categorie.component';
import { DeleteDataService } from '../../services/delete.service';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, DataProject, DataSkill, StatusComponent, TechComponent, CategorieComponent],
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild ("project") project!: ElementRef;

  data: any[] = [];

  select = false;
  update = false
  newProject = true;
  newSkill = true;
  id = 0;
  projectCount = 0;
  skillCount = 0;

  constructor(private getDataService: GetDataService, private deleteDataService: DeleteDataService){}

  ngOnInit(): void {
    this.recoverData("project");
    this.refreshCounts();
  }

  selectedOption(change: boolean): void {
    this.update = false;
    this.select = change;
    const table = !change ? "project" : "skill";
    this.recoverData(table);
    this.refreshCounts();
  }

  recoverData(table: string): void {
    this.getDataService.getData(table).subscribe({
      next: res => {
        console.log(res);
        this.data = res;
        if (table === "project") this.projectCount = res.length;
        if (table === "skill") this.skillCount = res.length;
      },
      error: err => console.error(err)
    });
  }

  refreshCounts(): void {
    this.getDataService.getData("project").subscribe({
      next: res => this.projectCount = res.length,
      error: err => console.error(err)
    });
    this.getDataService.getData("skill").subscribe({
      next: res => this.skillCount = res.length,
      error: err => console.error(err)
    });
  }
  
  addNewSkill(): void {
    this.newSkill = !this.newSkill;
    this.update = false;
  }

  addNewProject(): void {
    this.newProject = !this.newProject;
    this.update = false;
  }

  sendNewProperties(event?: any): void {
    console.log(this.update + " " + event)
    if(this.update && event !== undefined) {
      for(let i = 0; i < this.data.length; i++) {
        switch (this.select) {
          case true: { if (this.data[i].id_skill === event.value.id_skill) this.data[i] = { ...this.data[i], ...event.value }; break;}
          case false: { if (this.data[i].id_project === event.value.id_project) this.data[i] = { ...this.data[i], ...event.value }; break;}
        }
      }
    } else if (event !== undefined) {
      this.data = [event.value, ...this.data];
    }

    this.select ? this.newSkill = !this.newSkill : this.newProject = !this.newProject;
    this.update = false;
    this.refreshCounts();
  }

  editProject(id: number): void {
    this.newProject = !this.newProject;
    this.update = !this.update;
    this.id = id;
  }

  editSkill(id: number): void {
    this.newSkill = !this.newSkill;
    this.update = !this.update;
    this.id = id;
  }
  
  removeData(id: number): void {
    const table = !this.select ? "project" : "skill";

    this.deleteDataService.deleteData(id, table).subscribe({
      next: res => {
        console.log('Suppression OK', res);
        this.refreshCounts();
      },
      error: err => {
        console.error('Erreur suppression', err);
      }
    });

    const newData: any[] = [];

    for(const el of this.data) {
      switch (this.select) {
        case true: { if (el.id_skill !== id) newData.push(el); break;}
        case false: { if (el.id_project !== id) newData.push(el); break;}
      }
    }

    this.data = newData;
  }
}