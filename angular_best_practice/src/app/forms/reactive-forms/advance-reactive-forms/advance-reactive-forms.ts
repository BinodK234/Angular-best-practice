import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './advance-reactive-forms.html',
  styleUrls: ['./advance-reactive-forms.scss'],
})
export class AdvanceReactiveForms implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  // this is for Value change 
  search = new FormControl('');

  // this is for status change
  email = new FormControl('', [Validators.required, Validators.email])

  // this is for enable, disable, showValue, and showRowValue
  loginForm = new FormGroup({
    email: new FormControl('Binod'),
    password: new FormControl('binod@gmail.com')
  })

  enableEmail(){
    this.loginForm?.get('email')?.enable()

  }
  disableEmail(){
    this.loginForm.get('email')?.disable()

  }
  showValue() {
    console.log(this.loginForm.value);
    
  }
  showRowValue(){
    console.log(this.loginForm.getRawValue());
  }


  ngOnInit(): void {
    this.search.valueChanges.subscribe(res => {
      console.log(res, 'resssssssss');
    });

    this.email.statusChanges.subscribe((res: any) => {
      console.log(res, "resss");
    })
  }

  patchValueForm(): void {
    this.registerForm.patchValue({
      userName: 'Binod',
      password: '123455'
    });
  }

  setValueForm(): void {
    this.registerForm.setValue({
      userName: 'Binod',
      email: 'binod@gmail.com',
      password: '1234223'
    });
  }
}

