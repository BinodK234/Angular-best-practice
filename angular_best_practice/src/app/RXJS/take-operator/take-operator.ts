import { Component, OnInit } from '@angular/core';
import { of, take, takeLast, takeWhile } from 'rxjs'

@Component({
  selector: 'app-take-operator',
  imports: [],
  templateUrl: './take-operator.html',
  styleUrl: './take-operator.scss',
})
export class TakeOperator implements OnInit {
  ngOnInit(){
    const numObj$ = of(1,2,3,4,5,6,7,8,9); // Of operator is used to act as a observable
    numObj$.pipe(
      // take(3),  // this will provide the value from start to given number
      // takeLast(4) // this will provide the value from last value till the given value
      takeWhile(n => n <3, true) // this acts as filter in observable and it will give the result based on your given condition

    ).subscribe(res => {
      console.log(res, "ressssss");
      
    })

  }

}
