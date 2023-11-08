import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css"],
})
export class UserdetailComponent {
  detailId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe({
      next: (r) => {
        this.detailId = r.get("id");
      },
    });
  }
}
