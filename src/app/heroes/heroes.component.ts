import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {
    heroService.getHeroes().subscribe(heros => this.heros = heros);
   }

  ngOnInit() {
  }

  hero_1: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heros: Hero[];

  selectedHero: Hero;

  onSelect(hero):void{
    console.log(hero.name+" clicked");
    this.messageService.add(hero.name+" clicked");
    this.selectedHero = hero;
  }
}
