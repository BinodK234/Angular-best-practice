import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent implements OnChanges {
  @Input() userName!: string;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);

    console.log('current Value: ', changes['userName'].currentValue);
    console.log('Previous Value: ', changes['userName'].previousValue);
    
    

  }
}
