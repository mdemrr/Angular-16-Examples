import { Component, Inject } from "@angular/core";
import { ProductService } from "src/app/productService";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  name2: string;
  constructor(@Inject("productService") productService) {
    productService.getProducts()[0].name = "Tornavida";
    this.name2 = productService.getProducts()[0].name;
  }
}
