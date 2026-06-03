import { Component } from '@angular/core';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.scss',
})
export class SubjectComponent {

 myObservable = new Observable(observer => {

   observer.next('Angular');
   observer.next('React');
   observer.next('Vue');

   observer.complete();
}).subscribe({
   next: (value) => console.log(value),
   error: (err) => console.log(err),
   complete: () => console.log('Completed')
});
}
