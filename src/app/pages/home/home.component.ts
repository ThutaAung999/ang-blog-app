import { Component } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPostArray: Array<Post>=[]

  constructor(private postService:PostsService) {
    this.postService.loadFeatured().subscribe(val=>{
      console.log(val)
      this.featuredPostArray=val;
    })
  }

}
