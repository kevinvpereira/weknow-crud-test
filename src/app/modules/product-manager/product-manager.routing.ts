import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';
import { ProductsResolver } from 'src/app/core/resolvers/products.resolver';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: 'new',
    component: ProductComponent,
  },
  {
    path: ':id',
    component: ProductComponent,
    resolve: { product: ProductResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductManagerRoutingMOdule {}
