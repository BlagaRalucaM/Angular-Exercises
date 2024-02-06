import { Component } from '@angular/core';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent {

  public furniture: any = [];

  public ngOnInit(){
    this.furniture.push('sink');
    this.furniture.push('toilet');
    this.furniture.push('shower');
    this.furniture.push('mirror');
    // this.furniture=[]
  }

}
