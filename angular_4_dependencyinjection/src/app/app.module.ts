import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoggerService, ProductService } from "./productService";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [
    ProductService, //Bu şekilde kullanımın adı Default Type Tokendir
    //{provide:ProductService,useClass:ProductService} //Bu şekilde kullanımın adı da Type Tokendir
    { provide: "productService", useClass: ProductService }, //Bu şekilde kullanımın adı da string Tokendir. Kullanım şekli HomeComponentte yer almaktadır.
    //Diğer provide kullanımları
    { provide: "example", useValue: "Merhaba" },
    {
      provide: "example2",
      useValue: () => {
        return "merhaba";
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
