import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatepickerFwComponent } from './mat-datepicker-fw.component';

describe('MatDatepickerFwComponent', () => {
  let component: MatDatepickerFwComponent;
  let fixture: ComponentFixture<MatDatepickerFwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDatepickerFwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDatepickerFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
