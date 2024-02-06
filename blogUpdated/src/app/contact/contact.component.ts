import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = "Contact";
  public width:number = 400;
  public height:number = 400;
  public imageSource:string = "https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="

    public name:string = '';
    public email:string = '';
    public telephone:string = '';
    public message:string = '';

    public completedForm:boolean = false;
  
  ngOnInit(){
    console.log ('Contact component started')


  }

  public changeImage(){
    if(this.imageSource != 'https://www.gira.ro/poze/telefonul%20arhitectului.jpg') {
      this.imageSource = 'https://www.gira.ro/poze/telefonul%20arhitectului.jpg';
    }
    else {
      this.imageSource = "https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=";
    }

  }

  ngOnDestroy(){
    // alert('Pay attention you re leaving the contact page')
    console.log('Contact component destroyed')
  }


  submitForm(){

    if (this.name == '' || this.email == '' || this.telephone == '' || this.message == '') {

      alert('Please fill in all the fields')
      return;
    }

    if (!this.validatePhone(this.telephone)) {
      alert('Please enter a valid phone number')
      return;
    }
    if (!this.validateEmail(this.email))
      return;

    this.completedForm = true;
  }


  public validateEmail(input:string):boolean {

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/;

      if (input.match(validRegex)) {
        return true;

      } else {

        alert("Invalid email address!");

        return false;

      }

  } 

  public validatePhone(input:string):boolean {
    const phoneNumberPattern = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    
    return phoneNumberPattern.test(input);

  }



  public resetForm(){
      
      this.name = '';
      this.email = '';
      this.telephone = '';
      this.message = '';
      this.completedForm = false;
  
    }


}

