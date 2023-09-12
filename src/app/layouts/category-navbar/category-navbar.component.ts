import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})

export class CategoryNavbarComponent implements OnInit{

  categoryArray:Array<Category>=[]

  constructor(private categoryService:CategoriesService) {
  }

ngOnInit() {
    this.categoryService.loadData().subscribe(val=>{
          this.categoryArray=val
    })
}
}
