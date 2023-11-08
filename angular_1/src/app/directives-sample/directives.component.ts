import { Component } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"],
})
export class DirectivesComponent {
  names: string[] = ["mehmet", "ali", "veli", "Ruken"];
  isVisible = false;
  myClass: string = "color-red";
  myStyle: any = {
    color: "blue",
    "font-size": "30px",
  };
}
