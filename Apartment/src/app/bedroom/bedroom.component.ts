import { Component } from '@angular/core';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent {
  public furniture: any = [];
  public ngOnInit(){
    this.furniture.push('desk');
    this.furniture.push('chair');
    this.furniture.push('bed');
    this.furniture.push('table');
    this.furniture.push('mirror');
    // this.furniture=[]
  }

}

