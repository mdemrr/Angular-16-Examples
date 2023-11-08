import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({
      message: "Merhaba",
    });
  }
  @Input() dataChild: string = "Merhaba child";

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
}
