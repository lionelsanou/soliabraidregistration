import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-httptutorial',
  templateUrl: './httptutorial.component.html',
  styleUrls: ['./httptutorial.component.css']
})
export class HttptutorialComponent implements OnInit {
  posts:any[];
  constructor(http:Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response=>{
      console.log(response.json());
      this.posts=response.json();
    })
  }
  createPost(title){

  }
  ngOnInit() {
  }

}
