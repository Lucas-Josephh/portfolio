import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddDataService } from '../../../services/create.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from '../../../services/recover.service';
import { UpdateDataService } from '../../../services/update.service';

@Component({
  selector: 'extranet-dataProject',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './dataProject.component.html',
  styleUrls: ['./dataProject.component.scss']
})
export class DataProject implements OnInit{
  @Output() sendNewProperties = new EventEmitter();
  @Input() update = false;
  @Input() id: number = 0;

  projectForm: FormGroup;
  statusOptions = ['Terminé', 'En cours'];
  technologies: string[] = [];
  
  constructor(
    private fb: FormBuilder,
    private addDataService: AddDataService,
    private getDataService: GetDataService,
    private updateDataService: UpdateDataService
  ) {
    
    this.projectForm = this.fb.group({
      id_project: [''],
      title: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      url: [''],
      technologie: [[] as string[], Validators.required],
      techInput: [''],
      demo: [''],
      github: [''],
    });
  }

  ngOnInit(): void {
    if(this.update) {
      this.getDataService.getData("project", this.id).subscribe({
        next: res => {
          this.technologies = Array.isArray(res[0].technologie)
            ? res[0].technologie
            : String(res[0].technologie || '')
                .split(',')
                .map((t: string) => t.trim())
                .filter((t: string) => t);

          this.projectForm.setValue({
            id_project: res[0].id_project,
            title: res[0].title,
            status: res[0].status,
            description: res[0].description,
            url: res[0].url,
            technologie: this.technologies,
            demo: res[0].demo,
            github: res[0].github,
            techInput: ''
          });
        },
        error: err => {
          console.error(err);
        }
      })   
    }
  }

  addTechnology(): void {
    const value = String(this.projectForm.value.techInput || '').trim();
    if (!value) return;
    this.technologies = [...this.technologies, value];
    this.projectForm.patchValue({ technologie: this.technologies });
    this.projectForm.patchValue({ techInput: '' });
  }

  removeTechnology(index: number): void {
    this.technologies = this.technologies.filter((_, i) => i !== index);
    this.projectForm.patchValue({ technologie: this.technologies });
  }

  actionProject(): void {
    if (this.projectForm.valid) {
      this.projectForm.patchValue({ technologie: this.technologies });

      if(!this.update) {
        this.addDataService.addData(this.projectForm.value, "project").subscribe({
          next: res => console.log("Réponse du serveur : ", res),
          error: err => console.error(err)
        });
      } else {
        this.updateDataService.updateData(this.projectForm.value, this.projectForm.value.id_project, "project").subscribe({
          next: res => console.log("Réponse du serveur : ", res),
          error: err => console.error(err)
        });
      }
      this.newProject(this.projectForm);
    }
  }

  newProject(value?: FormGroup): void {
    this.sendNewProperties.emit(value);
  }
}
