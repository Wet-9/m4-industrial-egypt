import { AbstractControl, ValidatorFn } from '@angular/forms';

export function prohibited(forbiddenWord: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (value && forbiddenWord.test(value)) {
      return { prohibited: true, message: `The input contains a prohibited word.` };
    }

    return null;
  };
}
