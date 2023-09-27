import { Component , inject } from '@angular/core';
import { ProductComponent } from './../../componentes/product/product.component';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-products',
  standalone : true, 
  imports : [ ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

  Http = inject(HttpClient);
  ProductList: Product[] = [];


  ngOnInit() {
    this.Http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.ProductList = data;
      }); 
  }

}
