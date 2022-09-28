import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductService } from 'src/app/core/api/product.service';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private productService: ProductService, private router: Router) {}

  deleteProduct() {
    this.productService
      .delete(this.product._id!)
      .pipe(take(1))
      .subscribe(() => {
        console.log('sucesso');

        window.location.reload();
      });
  }
}
