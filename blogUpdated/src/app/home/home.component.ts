import { Component } from '@angular/core';
interface Post {
  userId: number,
  id: number,
  title: any,
  body: any
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public posts:Post[] = [];
  title = "Home";
  public width:number = 300;
  public height:number = 300;
  public imageSource:string = "https://png.pngtree.com/element_our/sm/20180516/sm_5afc6f6f0d492.jpg";

  ngOnInit(){

    fetch('https://jsonplaceholder.typicode.com/posts') // go to this url and get the data
      .then(response => response.json()) // convert the response to json thru a promise
      .then( (blogPosts) => { // take the json and do something with it
        this.posts = blogPosts.reverse();
        // console.log(this.posts)
      });
  }
  

  addPostAuto(){

    let postNumber = this.posts.length + 1;
    let toFixed:any = Math.random();
    let postBodyNo: any = toFixed.toFixed(3) * 1000;
    let newPost:Post = {
      userId: 1,
      id: 9999,
      title: 'New Post ' + postNumber,
      body: 'New Post Body ' + postBodyNo
    };

    this.posts.unshift(newPost);
  }

  addPostManual(){
    let postNumber = this.posts.length + 1;
    let toFixed:any = Math.random();
    let postBodyNo: any = toFixed.toFixed(3) * 1000;
    let newPost: Post = { 
      userId: 1,
      id: 9999,
      title: 'New Post ' + postNumber,
      body: 'New Post Body ' + postBodyNo
    };
    newPost.id = 10000;
    newPost.userId = 1;
    newPost.title = prompt('Please enter post title.');
    newPost.body = prompt('Pleae enter post body.');
    this.posts.unshift(newPost);
  }


}
