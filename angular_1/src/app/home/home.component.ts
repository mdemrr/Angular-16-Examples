import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  @Input() title2 = "mehmet";
  @Input() pageName: string = "mehmet";
  public inputValue = "";
}
