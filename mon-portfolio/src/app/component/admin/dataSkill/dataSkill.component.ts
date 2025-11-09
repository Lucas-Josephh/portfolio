import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddDataService } from '../../../services/create.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from '../../../services/recover.service';
import { UpdateDataService } from '../../../services/update.service';

@Component({
  selector: 'extranet-dataSkill',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './dataSkill.component.html',
  styleUrls: ['./dataSkill.component.scss']
})
export class DataSkill implements OnInit{
  @Output() sendNewProperties = new EventEmitter();
  @Input() update: boolean = false;
  @Input() id: number = 0;

  skillForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private addDataService: AddDataService,
    private getDataService: GetDataService,
    private updateDataService: UpdateDataService
  ) {

    this.skillForm = this.fb.group({
      id_skill: [''],
      name: ['', Validators.required],
      categorie: ['', Validators.required],
      level: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if(this.update) {

      this.getDataService.getData("skill", this.id).subscribe({
        next: res => {
          this.skillForm.setValue({
            id_skill: res[0].id_skill,
            name: res[0].name,
            categorie: res[0].categorie,
            level: res[0].level
          });
        },
        error: err => {
          console.error(err);
        }
      })
    }
  }

  actionSkill(): void {
    if (this.skillForm.valid) {
      if(!this.update) {
        
        this.addDataService.addData(this.skillForm.value, "skill").subscribe({
          next: res => console.log("Réponse du serveur : ", res),
          error: err => console.error(err)
        });
      } else {
        this.updateDataService.updateData(this.skillForm.value, this.skillForm.value.id_skill, "skill").subscribe({
          next: res => console.log("Réponse du serveur : ", res),
          error: err => console.error(err)
        });
      }
      this.newSkill(this.skillForm);
    }
  }

  newSkill(value?: FormGroup): void {
    this.sendNewProperties.emit(value);
  }
}
