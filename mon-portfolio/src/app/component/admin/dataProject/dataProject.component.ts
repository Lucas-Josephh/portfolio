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
      url: ['', Validators.required],
      technologie: ['', Validators.required],
      demo: [''],
      github: [''],
    });
  }

  ngOnInit(): void {
    if(this.update) {
      this.getDataService.getData("project", this.id).subscribe({
        next: res => {
          this.projectForm.setValue({
            id_project: res[0].id_project,
            title: res[0].title,
            status: res[0].status,
            description: res[0].description,
            url: res[0].url,
            technologie: res[0].technologie,
            demo: res[0].demo,
            github: res[0].demo
          });
        },
        error: err => {
          console.error(err);
        }
      })   
    }
  }

  actionProject(): void {
    if (this.projectForm.valid) {
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
