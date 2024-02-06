import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apartament';
  todos: any = [];

  // public todos: any = [];

  constructor() { 

    const paramsRoomURL = new URL(window.location.href);
    // if (paramsRoomURL.pathname === '/kitchen'){
    // console.log('We got to the kitchen!')
    // }
    let urlPath = paramsRoomURL.pathname.replace('/', '')

    if (urlPath == '') {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todos = json;
        });
    }


    //if going on other routes hide todos 
    if (urlPath !== '') {
      this.todos = [];
    }


  
  }

  ngOnInit() {

    console.log(this.todos);
    // Simple GET request with response type <any>
      
 
  }



  
}

