import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProject } from './dataProject.component';

describe('Navbar', () => {
  let component: DataProject;
  let fixture: ComponentFixture<DataProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
