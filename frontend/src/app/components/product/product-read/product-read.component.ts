import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  deleteProduct(id: number | string) {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso");
      this.ngOnInit();
    });
  }
}
