import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productslayout',
  standalone: true,
  imports: [ProductComponent,CategoryComponent],
  templateUrl: './productslayout.component.html',
  styleUrl: './productslayout.component.css'
})
export class ProductslayoutComponent {

}
