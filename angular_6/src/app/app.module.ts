import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { AboutComponent } from "./components/about/about.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { DetailsComponent } from "./components/details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ProductComponent,
    AboutComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
