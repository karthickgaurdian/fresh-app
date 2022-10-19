import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fresh-app';

  } 
  interface Account {
    name:string
    id: number
    displayName: string
    version: 1
  }
   
  function welcome(user: Account) {
    console.log(user.id)
  }
  