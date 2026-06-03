import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    items: string[] = ['Apple', 'Banana', 'Mango'];

    addItems(){
      this.items.push("orange")
    }
    str = []
    getIndex(str: any){
      this.items.splice(str, 1)
    }
    count = 0;
    increment(){
      this.count++
    }

    ngDoCheck(){
      console.log("checking the docheck");
    }

}
