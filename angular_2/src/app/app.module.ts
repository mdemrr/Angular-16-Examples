import { DEFAULT_CURRENCY_CODE, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./components/parent_to_child_comminication/child/child.component";
import { ParentComponent } from "./components/parent_to_child_comminication/parent/parent.component";

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent],
  imports: [BrowserModule],
  providers: [
    // Dilersek bu şekilde default para birimi ekleyebiliriz
    /* { provide: DEFAULT_CURRENCY_CODE, useValue: "₺" }*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
