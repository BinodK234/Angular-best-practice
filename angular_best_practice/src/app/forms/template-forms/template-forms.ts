import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.scss',
})
export class TemplateForms {
  email: string = '';
  password: string = ''


onSubmit(form: NgForm){
  console.log(form.value);
}
}