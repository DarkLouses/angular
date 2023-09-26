import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title:string = 'gabriel';
  Http = inject(HttpClient);
  ProductList: Product[] = [];

  changeTitle():void {
    this.title = 'changed';
  }

  ngOnInit() {
    this.Http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.ProductList = data;
      }); 
  }
}


