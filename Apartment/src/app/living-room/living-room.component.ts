import { Component } from '@angular/core';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent {
  public furniture: any = [];
  public ngOnInit(){
    this.furniture.push('desk');
    this.furniture.push('chair');
    this.furniture.push('bed');
    this.furniture.push('table');
    // this.furniture=[]
  }

}
