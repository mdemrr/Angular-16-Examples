import { Component } from "@angular/core";
import { ProductService } from "./productService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public name1: string;
  constructor(private productService: ProductService) {
    console.log(productService.getProducts());
    this.name1 = productService.getProducts()[0].name;
  }
}
