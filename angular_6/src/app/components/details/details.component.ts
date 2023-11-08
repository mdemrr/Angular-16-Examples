import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  public paramId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    alert("test");
    this.getId();
  }
  getId() {
    this.activatedRoute.paramMap.subscribe({
      next: (r) => {
        this.paramId = r.get("id");
      },
    });
  }
  ngOnInit(): void {
    this.getId();
  }
}
