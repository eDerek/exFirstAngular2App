import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { HEROES } from './data_source/heroes.source';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //just test the message service
    this.messageService.add('HeroService: fetched heroes');
    //return an Observable
    return of(HEROES);
  }

}
