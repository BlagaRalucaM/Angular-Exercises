import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input()  furniture: any;

  public furnitureToBeAdded: any;
  public furnitureToBeUpdated: any;
  public updateAction: boolean = false;
  public indexUpdateAt: any;

  public constructor(){
  }

  public addFurniture() {
    if (this.furniture.includes(this.furnitureToBeAdded)) {
      alert('Item already exists!');
      return;

    }
    this.furniture.push(this.furnitureToBeAdded)
  }

  public removeFurniture(i: number, item: any) {
    console.log(i, item);

    this.furniture.splice(i, 1);
    // delete this.furniture[i];
    console.log(this.furniture.join(', '));
  }

  public removeAllFurniture() {
    this.furniture = [];
  }

  public sendUpdate() {
    this.furniture[this.indexUpdateAt] = this.furnitureToBeUpdated;
    this.updateAction = false;
    this.indexUpdateAt = null;
  }

  public updateFurniture(i: number, item: any) {
    this.furnitureToBeUpdated = item;
    this.indexUpdateAt = i;
    this.updateAction = true;
  }


}
