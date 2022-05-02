import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { validateUniqueListEntry } from './form.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  start = new Date();
  end = new Date();

  myForm: any;
  /**
   * Dummy Datas
   */
  public list: Country[] = [ { id: '1', name: 'DE' }, { id: '2', name: 'AU' }, { id: '3', name: 'FR' }];
  public dummy1: string[] = ['eins', 'zwei', 'drei'];

  

  constructor(private formBuilder: FormBuilder) {
    this.createMyForm();
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

  createMyForm() {
    this.myForm = this.formBuilder.group({
      firstName: ['', [validateUniqueListEntry(this.dummy1), Validators.required], [], { updateOn: 'blur' }],
      lastName: [''],
      selection: ['']
    });
  }

  refreshForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    //this.myForm = this.createMyForm();
  }

  getErrorMessage() {
    if (this.myForm.get('firstName').hasError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('firstName').hasError('isntUnique') ? 'Not unique' : '';
  }

}
