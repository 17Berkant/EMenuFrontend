import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  httpClient=inject(HttpClient);
  activatedRoot=inject(ActivatedRoute)
  apiUrl = "http://localhost:5181/api/";
  filterText="";

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    });
    
  }

  getProducts() {
    let newPath=this.apiUrl+"Products/getall"
    this.httpClient.get<ProductResponseModel>(newPath).subscribe((response:any) => {
      this.products=response;
    });
  }

  getProductsByCategory(categoryId:number) {
    let newPath=this.apiUrl+"Products/getbycategory?categoryId="+categoryId
    this.httpClient.get<ProductResponseModel>(newPath).subscribe((response:any) => {
      this.products=response;
    });
  }
}
