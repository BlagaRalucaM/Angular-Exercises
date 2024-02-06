import { Component } from '@angular/core';


@Component({
  selector: 'app-apartament-map',
  templateUrl: './apartament-map.component.html',
  styleUrls: ['./apartament-map.component.css']
})
export class ApartamentMapComponent {


  public constructor(){

  }
  public ngOnInit() {
    const paramsRoomURL = new URL(window.location.href);
    // if (paramsRoomURL.pathname === '/kitchen'){
      // console.log('We got to the kitchen!')
    // }
    let roomName = paramsRoomURL.pathname.replace('/', '')
    console.log(roomName);

    if(roomName !== ''){
      this.changeBackground(roomName)
    }

  }
  public changeBackground(room: string){
   let color: any;
    if (room === 'kitchen') {
      color = '#00b894';
    }else if(room === 'bedroom'){
      color = '#74b9ff';
    }else if(room === 'bathroom'){
      color = '#81ecec';
    }else if(room === 'livingRoom'){
      color = '#ff7675';
    }else if(room === 'hall'){
      color = '#b2bec3';
    }
    if(color != null){
      document.body.style.backgroundColor = color;
    }
  }


}
