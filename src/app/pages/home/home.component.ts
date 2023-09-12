import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredPostArray: Array<Post>=[]
  latestPostArray!: Array<Post>

  constructor(private postService:PostsService) {}

  ngOnInit() {
      this.postService.loadFeatured().subscribe(val=>{
    //  console.log(val)
      this.featuredPostArray=val;
    })

    this.postService.loadLatest().subscribe(val=>{
      console.log("Latest posts ",val)
      this.latestPostArray=val;
    })
  }


}
