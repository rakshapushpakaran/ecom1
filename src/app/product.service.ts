import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api'; 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(`${this.baseUrl}/product`);
  }
}
