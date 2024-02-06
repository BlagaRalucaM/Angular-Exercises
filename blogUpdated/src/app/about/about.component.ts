import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "About";
  public width:number = 200;
  public height:number = 200;
  public imageSource:string = "https://media.istockphoto.com/id/1303480001/photo/about-us.jpg?s=170667a&w=0&k=20&c=heDV0SzdYH0j0kQRMQncbl4OARy15HTRwB0HmrGYHPQ="


  public aboutContent:any = `Lorem ipsum dolor sit am et, consectetur adipiscing elit. Nulla nec odio eget ur ds fringilla, at ti
  ncidunt est. Fusce eget tempor nisl. Nulla facilisi. Donec euismod, nisl id aliquet ultrices, nunc urna ultricies elit, quis aliquam nunc nisl id nisl. 
  Nulla facilisi. Donec euismod, nisl id aliquet ultrices, nunc urna ultricies elit, quis aliquam nunc nisl id nisl
  dfsfsd lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget urna fringilla, at tincidunt
   est. Fusce eget tempor nisl. Nulla facilisi. Donec euismod, nisl id aliquet ultrices, nunc urna ultricies elit, quis aliquam nunc 
   nisl id nisl. Nulla facilisi. Donec euismod, nisl id aliquet ultrices, nunc urna ultricies elit, quis aliquam nunc nisl id nisl`;
  

  ngOnInit(){
    console.log ('About component started')
  }

  editContent(){
    this.aboutContent = prompt('Please enter the new content');
  }
  
}
