import { Component } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent {

  public furniture: any = [];

  public ngOnInit(){
    this.furniture.push('mirror');
    this.furniture.push('chair');
  }

}
