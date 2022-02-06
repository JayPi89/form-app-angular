import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { validateUniqueListEntry } from './form.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /**
   * Dummy Datas
   */
  public list: Country[] = [ { id: '1', name: 'DE' }, { id: '2', name: 'AU' }, { id: '3', name: 'FR' }];
  myForm: any;
  public dummy1: string[] = ['eins', 'zwei', 'drei'];

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
   }

  ngOnInit(): void {
  }

  /**
   * Added formDirective, due to working with AngularMaterial
   */
  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.myForm.value);
    this.refreshForm(formDirective);
  }

  createMyForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [validateUniqueListEntry(this.dummy1), Validators.required]],
      lastName: [''],
      selection: ['']
    });
  }

  refreshForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    //this.myForm = this.createMyForm();
  }

}
