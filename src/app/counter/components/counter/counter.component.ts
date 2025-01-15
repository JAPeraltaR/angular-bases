import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <p>Contador:</p>
    <h3>{{counter}}</h3>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy()">+1</button>
    <hr>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void{
    this.counter += 1;
  }
  reset():void{
    this.counter = 10;
  }
  decreaseBy():void{
    this.counter -= 1;
  }
}
