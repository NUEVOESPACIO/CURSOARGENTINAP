import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Lista 2022';
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("Click detectado en header component")
  }

}
