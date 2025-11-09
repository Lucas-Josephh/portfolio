import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';

describe('Navbar', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
