import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {

  public furniture: any = [];

  public ngOnInit(){
    this.furniture.push('sink');
    this.furniture.push('kitchenTable');
    this.furniture.push('coffeeMachine');
    this.furniture.push('knife');
    // this.furniture=[]
  }

}
