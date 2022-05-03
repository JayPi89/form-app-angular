import {Component, Output, Input, EventEmitter} from '@angular/core';
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
  @Input() type: 'range' | 'start' | 'end' = 'range';

  @Output() startDateEvent = new EventEmitter<Date>();
  @Output() endDateEvent = new EventEmitter<Date>();
  beginTime = new Date();
  endTime = new Date();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor() {
    // was beim neu öffnen ohne änderungen am datum aber an der uhrzeit???
    this.initDefaultTime();
  }

  fireStartDateEvent(value: Date) {
    this.startDateEvent.emit(value);
  }

  onSubmit1() {
    try {
      if (this.type == 'range' || this.type == 'start') {
        
      }
      const start = this.range.get('start')?.value.toDate() as Date;
      start.setHours(this.beginTime.getHours());
      start.setMinutes(this.beginTime.getMinutes());
      this.beginTime = start;
      this.range.get('start')?.setValue(start);
      const end = this.range.get('end')?.value.toDate() as Date;
      end.setHours(this.endTime.getHours());
      end.setMinutes(this.endTime.getMinutes());
      this.endTime = end;
      this.range.get('end')?.setValue(end);
    } catch (error) { }
  }

  start() {

  }

  initDefaultTime() {
    this.beginTime.setHours(8);
    this.beginTime.setMinutes(0);
    this.endTime.setHours(18);
    this.endTime.setMinutes(0);
  }

  addMin(min: number = 15, isStartField: boolean = true) {
    if (isStartField) { 
      this.beginTime = new Date(this.beginTime);
      this.beginTime.setMinutes(this.beginTime.getMinutes() + min);
    } else {
      this.endTime = new Date(this.endTime);
      this.endTime.setMinutes(this.endTime.getMinutes() + min);
    }
  }

  setMin(value: number, isStartField: boolean = true) {
    if (isStartField) { 
      this.beginTime = new Date(this.beginTime);
      this.beginTime.setMinutes(value);
    } else {
      this.endTime = new Date(this.endTime);
      this.endTime.setMinutes(value);
    }
  }

  setHour(value: number, isStartField: boolean = true) {
    if (isStartField) { 
      this.beginTime = new Date(this.beginTime);
      this.beginTime.setHours(value);
    } else {
      this.endTime = new Date(this.endTime);
      this.endTime.setHours(value);
    }
    
  }

  refreshForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    //this.myForm = this.createMyForm();
  }

}
