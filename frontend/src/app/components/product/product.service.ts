import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Omit<Product, "id">): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        this.showMessage(error.message);
        return of(undefined);
      })
    );
  }

  update(product: Product): Observable<Product | undefined> {
    let _product: Product | undefined;
    this.getProductById(product.id).subscribe(
      (response) => (_product = response)
    );

    if (!_product) {
      return of(undefined);
    }

    return this.http.patch<Product>(`${this.baseUrl}/${_product.id}`, _product);
  }
}
