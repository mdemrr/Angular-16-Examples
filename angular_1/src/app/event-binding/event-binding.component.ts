import { Component } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"],
})
export class EventBindingComponent {
  btnClick() {
    alert("Button Tıklandı");
  }
  name: string;

  //model change için ngModelChange kullanılır
  name2: string;
  textLength: number;
  onChange($event) {
    console.log($event);
    this.textLength = ($event as string).length;
  }
}
