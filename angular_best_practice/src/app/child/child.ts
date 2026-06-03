import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgFor],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() items: string[] = [];
  @Output() delete = new EventEmitter<string>

  deleteStr(event: any){
     this.delete.emit(event)
  }

}
