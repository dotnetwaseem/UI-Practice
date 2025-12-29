import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedeatilsComponent } from './employeedeatils.component';

describe('EmployeedeatilsComponent', () => {
  let component: EmployeedeatilsComponent;
  let fixture: ComponentFixture<EmployeedeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeedeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
