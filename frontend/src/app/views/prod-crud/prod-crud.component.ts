import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-prod-crud",
  templateUrl: "./prod-crud.component.html",
  styleUrls: ["./prod-crud.component.css"],
})
export class ProdCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProductCreate() {
    this.router.navigate(['/products/create'])
  }
}
