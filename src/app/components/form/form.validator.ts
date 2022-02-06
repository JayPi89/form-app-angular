import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


/** 
 * Check if the entry is unique in the list
 * @param {string[]} list - The list to compare the entry against
 * 
 * @returns {ValidatorFn} - valid(null) : {isUnique: true}
 */
export function validateUniqueListEntry(list: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      if (control.value === null || control.value === undefined || control.value === '') {
        return null;
      }
      const isNotUnique = list.some( value => {
          if (value.toLowerCase() == control.value.toLowerCase()) {
            return true;
          } else {
            return false;
          }
      });
      return isNotUnique ? {isntUnique: {value: control.value}} : null;
    };
}