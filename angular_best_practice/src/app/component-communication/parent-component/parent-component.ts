import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  name = 'Binod'

  changeName(){
    this.name = 'Rahul'
  }
}
