import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

interface ProductInput {
  name: string;
  price: string | null;
}
@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  product: ProductInput = {
    name: "",
    price: null,
  };

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(["/products"]);
  }

  createProduct() {
    if (!this.product.name || !this.product.price) {
      this.productService.showMessage("Nome ou preço inválido");
    }

    const _product = {
      ...this.product,
      price: this.product.price ? parseFloat(this.product.price) : 0,
    };

    this.productService.create(_product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!");
      this.goBack();
    });
  }
}
