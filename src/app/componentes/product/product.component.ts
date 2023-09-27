import { Component, Input} from '@angular/core';
import { Product } from "../../models/product.model";
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports : [ NgOptimizedImage, CommonModule ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

export class ProductComponent {
  @Input() product!: Product | null;
}
