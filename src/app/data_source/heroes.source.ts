import { Hero } from "../hero";
import { BigHero } from "../BigHero";

//This is a mock data source for HeroService
export const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 21, name: 'Derek' }
  ];

  export const BIGHEROES: BigHero[] = [new BigHero(42, 'SkyDog','Fetch any object at any distance',110),
  new BigHero(43, 'Aaa','Eat shit',120),
  new BigHero(44, 'Bbb','Fuck',130),
  new BigHero(45, 'Ccc','Fart',140),
  new BigHero(46, 'Ddd','Lie',150)
];