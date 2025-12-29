import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePocComponent } from './storage-poc.component';

describe('StoragePocComponent', () => {
  let component: StoragePocComponent;
  let fixture: ComponentFixture<StoragePocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoragePocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoragePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
