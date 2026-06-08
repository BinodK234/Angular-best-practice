import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
// single validators
  // email = new FormControl('', [Validators.required]);
  // multi-validation
  email = new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]);
  userName = new FormControl('', [Validators.required, Validators.minLength(5)])
  showValue(){
    console.log(this.email.value);
    
  }

}
