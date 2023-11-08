import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular_3";
  /*
  @ViewChild("frm", { static: true }) frm: NgForm;
  onSubmit(data) {
    console.log(this.frm.value);
  }*/

  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.minLength(3), Validators.required]],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required]],
    });
  }
  get name() {
    return this.frm.get("name");
  }
  get surname() {
    return this.frm.get("surname");
  }
  get email() {
    return this.frm.get("email");
  }
  get tel() {
    return this.frm.get("tel");
  }

  onSubmit() {
    console.log(this.frm.value);
  }
}
