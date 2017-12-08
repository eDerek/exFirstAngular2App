import { Component, OnInit } from '@angular/core';

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

}
