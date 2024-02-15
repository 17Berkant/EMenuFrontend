import { Component, OnInit, inject } from '@angular/core';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoryResponseModel } from '../../models/categoryResponseModel';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  product:ProductComponent;
  categories: Category[] = [];
  currentCategory:Category;
  httpClient=inject(HttpClient);
  apiUrl = "http://localhost:5181/api/Categories/getall";

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.httpClient.get<CategoryResponseModel>(this.apiUrl).subscribe((response:any) => {
      this.categories=response;
    });
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item bg-light"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
       if(!this.currentCategory){
        return "list-group-item  bg-light"
       }
       else{
        return "list-group-item"
       }
  }
}
