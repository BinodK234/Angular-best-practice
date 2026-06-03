import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-beg',
  imports: [FormsModule],
  templateUrl: './template-beg.html',
  styleUrl: './template-beg.scss',
})
export class TemplateBeg {
  name: string = "Binod"
  email: string = "binod@gmail.com"
  newName: string = ""


  changeName(){
    this.name = this.newName;
    this.newName = ''
  }

    onSubmit(form: NgForm){
    console.log(form.value);
  }

}
