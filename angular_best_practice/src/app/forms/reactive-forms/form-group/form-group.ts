import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.html',
  styleUrl: './form-group.scss',
})
export class FormGroupC {
  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  // creating getter method why because you have to write each time 
  // this.registerForm.get('email')?errors?.['required']
  // instead of writing 10 times I will use getter method
  get email() {
    return this.registerForm.get('email')
  }
  get userName() {
    return this.registerForm.get('userName')
  }
  get password(){
    return this.registerForm.get('password')
  }


  onSubmit(form: any){
    console.log(this.registerForm.value);
    
  }
  showData(){
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls.email.value, "controls");
    console.log(this.registerForm.get('email')?.value);
  }
}
