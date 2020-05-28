import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  postArray: any[];
  bar = 0;
  constructor(private post: GetPostService) { 
    setTimeout(()=>{
      this.bar += 0.2;
    },5000);
  }
  
  ngOnInit() {
    this.post.getPosts()
  }

}
