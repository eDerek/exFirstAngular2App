import { Component, OnInit } from '@angular/core';
import { BigHero } from '../BigHero';
import { BIGHEROES } from '../data_source/heroes.source';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { 
    console.log("TestComponent instance created--------");
  }

  ngOnInit() {
    console.log("test component init....ed");
  }

  bigHeroes: BigHero[] = BIGHEROES;

}
