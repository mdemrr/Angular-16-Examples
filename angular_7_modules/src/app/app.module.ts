import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomModule } from "./custom/custom.module";
import { AddProductComponent } from "./components/products/add-product/add-product.component";
import { DetailProductComponent } from "./components/products/detail-product/detail-product.component";
import { ListProductComponent } from "./components/products/list-product/list-product.component";
import { AddCustomerComponent } from "./components/customers/add-customer/add-customer.component";
import { DetailCustomerComponent } from "./components/customers/detail-customer/detail-customer.component";
import { ListCustomerComponent } from "./components/customers/list-customer/list-customer.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsModule } from "./components/products/products.module";
import { CustomersModule } from "./components/customers/customers.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
