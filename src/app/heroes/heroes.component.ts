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
    this.loadHeros();
   }

  ngOnInit() {
  }

  loadHeros(): void{
    this.heroService.getHeroesViaHttp().subscribe(heros => this.heros = heros);
  }

//just for test
  hero_1: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  hero_2: Hero = new Hero(50, 'dfasdfasdfads');

  heros: Hero[];
  
//Replaced by a router link-----------------------
  selectedHero: Hero;

  //Replaced by a router link-----------------------
  onSelect(hero):void{
    console.log(hero.name+" clicked");
    this.messageService.add(hero.name+" clicked");
    this.selectedHero = hero;
  }

  add(name: string): void {
    if (!name) { return; }
    name = name.trim();
    this.heroService.addHeroByName(name)
      .subscribe(hero => {
        //this.heros.push(hero);
        this.loadHeros();
      });
  }

  delete(hero: Hero): void {
    // this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(_ => {console.log(_);this.loadHeros();});
  }

}
