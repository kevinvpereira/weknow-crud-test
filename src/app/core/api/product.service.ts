import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  create(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  update(product: Product) {
    return this.http.put(`${this.apiUrl}/${product._id}`, product);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
