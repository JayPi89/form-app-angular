import {Component, Output, Input} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export class CustomizedDateAdapter extends MomentDateAdapter {
  override getFirstDayOfWeek() {
    return 1;
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY HH:mm',
  },
  display: {
    dateInput: 'DD.MM.YYYY HH:mm',
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
export class MatDatepickerFwComponent {

  @Input() isRange = true;
  @Input() type: 'range' | 'start' | 'end' | undefined;

  beginTime = new Date();
  endTime = new Date();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  stH = 0;
  enM = 0;
  stM = 0;
  enH = 0;

  constructor() {
    // was beim neu öffnen ohne änderungen am datum aber an der uhrzeit???
    this.initDefaultTime();
  }

  onSubmit1() {
    try {
      const start = this.range.get('start')?.value.toDate() as Date;
      start.setHours(this.beginTime.getHours());
      start.setMinutes(this.beginTime.getMinutes());
      this.range.get('start')?.setValue(start);
      const end = this.range.get('end')?.value.toDate() as Date;
      end.setHours(this.endTime.getHours());
      end.setMinutes(this.endTime.getMinutes());
      this.range.get('end')?.setValue(end);
    } catch (error) { }
  }

  initDefaultTime() {
    this.beginTime.setHours(8);
    this.beginTime.setMinutes(0);
    this.endTime.setHours(18);
    this.endTime.setMinutes(0);
  }

  addMin() {
    if (this.beginTime.getMinutes() >= 45) {
      this.beginTime = new Date(this.beginTime);
      this.beginTime.setHours(this.beginTime.getHours() + 1);
      this.beginTime.setMinutes(0);
      return;
    }
    this.beginTime = new Date(this.beginTime);
    this.beginTime.setMinutes(this.beginTime.getMinutes() + 15);
  }

  removeMin() {
    if (this.beginTime.getMinutes() <= 0) {
      this.beginTime = new Date(this.beginTime);
      this.beginTime.setHours(this.beginTime.getHours() - 1);
      this.beginTime.setMinutes(45);
      return;
    }
    this.beginTime = new Date(this.beginTime);
    this.beginTime.setMinutes(this.beginTime.getMinutes() - 15);
  }

  setMin(value: number) {
    this.beginTime = new Date(this.beginTime);
    this.beginTime.setMinutes(value);
  }

  setHour(value: number) {
    this.beginTime = new Date(this.beginTime);
    this.beginTime.setHours(value);
  }

  addMinEnd() {
    if (this.endTime.getMinutes() >= 45) {
      this.endTime = new Date(this.endTime);
      this.endTime.setHours(this.endTime.getHours() + 1);
      this.endTime.setMinutes(0);
      return;
    }
    this.endTime = new Date(this.endTime);
    this.endTime.setMinutes(this.endTime.getMinutes() + 15);
  }

  removeMinEnd() {
    if (this.endTime.getMinutes() <= 0) {
      this.endTime = new Date(this.endTime);
      this.endTime.setHours(this.endTime.getHours() - 1);
      this.endTime.setMinutes(45);
      return;
    }
    this.endTime = new Date(this.endTime);
    this.endTime.setMinutes(this.endTime.getMinutes() - 15);
  }

  setMinEnd(value: number) {
    this.endTime = new Date(this.endTime);
    this.endTime.setMinutes(value);
  }

  setHourEnd(value: number) {
    this.endTime = new Date(this.endTime);
    this.endTime.setHours(value);
  }

  refreshForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    //this.myForm = this.createMyForm();
  }

}
