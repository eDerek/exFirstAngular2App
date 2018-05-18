import { Component } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { of } from 'rxjs/observable/of';
 
@Component({
  selector: 'app-hero-AsycMessage',
  template: `
    <h2>Async Hero Message and AsyncPipe</h2>
    <p>Current time: {{ current_time | async }}</p>
    <p>Message: {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>`,
})
export class HeroAsyncMessageComponent {
 
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  message$: Observable<string>;

  current_time: Observable<string>;
 
  constructor() {
      this.current_time = Observable.interval(1000).map(i => i+"");
      this.resend(); 
  }
 
  resend() {
    this.message$ = of(this.messages[0]);
    setTimeout(() => {
        this.message$ = Observable.interval(1000)
      .map(i => this.messages[i+1]).take(this.messages.length-1);
    }, 1000);
    
  }
}