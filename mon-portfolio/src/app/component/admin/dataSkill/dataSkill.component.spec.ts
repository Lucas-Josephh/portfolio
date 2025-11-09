import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSkill } from './dataSkill.component';

describe('Navbar', () => {
  let component: DataSkill;
  let fixture: ComponentFixture<DataSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
