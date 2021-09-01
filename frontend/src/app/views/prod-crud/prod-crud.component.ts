import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-prod-crud",
  templateUrl: "./prod-crud.component.html",
  styleUrls: ["./prod-crud.component.css"],
})
export class ProdCrudComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate() {
    this.router.navigate(["/products/create"]);
  }
}
