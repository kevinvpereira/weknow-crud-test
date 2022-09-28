import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.activatedRoute.data.subscribe((data) => {
      this.products = data['products'];
    });
  }
}
