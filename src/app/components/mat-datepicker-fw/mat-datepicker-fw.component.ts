import {Component, OnInit} from '@angular/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export class CustomizedDateAdapter extends MomentDateAdapter {
  override getFirstDayOfWeek() {
    return 1;
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
 

@Component({
  selector: 'app-mat-datepicker-fw',
  templateUrl: './mat-datepicker-fw.component.html',
  styleUrls: ['./mat-datepicker-fw.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: CustomizedDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class MatDatepickerFwComponent implements OnInit {

  formatLabel: any;
  clicked = false;
  selected: Date | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onTimeChange(x: any) {

  }

}
