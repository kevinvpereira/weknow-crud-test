import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/api/product.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProduct();
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saveRequest.pipe(take(1)).subscribe(() => {
      console.log('success');
      this.router.navigate(['../']);
    });
  }

  get descriptionControl() {
    return this.form.get('descricao');
  }

  private get product() {
    return this.form.value as Product;
  }

  private get saveRequest(){
    let saveRequest = this.productService.create(this.product);
    if (this.isEdit) {
      saveRequest = this.productService.update(this.product);
    }

    return saveRequest;
  }

  private getProduct() {
    this.activatedRoute.data.subscribe((data) => {
      const product: Product = data['product'];

      if (product) {
        this.isEdit = true;
        this.form.patchValue(product);
      }
    });
  }

  private initForm() {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      _id: [undefined],
    });
  }
}
