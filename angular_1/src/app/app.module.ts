import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { FormsModule } from "@angular/forms";
import { DirectivesComponent } from "./directives-sample/directives.component";
import { ExampleDirective } from "./directives/example.directive";
import { CustomIfDirective } from "./directives/custom-if.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventBindingComponent,
    DirectivesComponent,
    ExampleDirective,
    CustomIfDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
