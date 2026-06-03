import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.html',
  styleUrl: './observables.scss',
})
export class ObservablesComponent implements OnInit {

  observables: Observable<string> = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('Hello');
    subscriber.next(Math.random().toString());
  });
  // count observable
   countObservable = new Observable(subscriber => {
    let count = 0;
    setInterval(() => {
      subscriber.next(count++);
    }, 1000)
  })

  ngOnInit() {
    const subscription = this.countObservable.subscribe((value) => console.log(value));
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
    this.observables.subscribe((value: string) => console.log(value));
    this.observables.subscribe((value: string) => console.log(value));
    this.observables.subscribe((value: string) => console.log(value));
    this.observables.subscribe((value: string) => console.log(value));
  }
}
