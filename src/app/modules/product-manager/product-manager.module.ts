import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductManagerRoutingMOdule } from './product-manager.routing';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductManagerRoutingMOdule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ProductManagerModule {}
