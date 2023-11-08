import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AddProductComponent } from "./components/products/add-product/add-product.component";
import { DetailProductComponent } from "./components/products/detail-product/detail-product.component";
import { ListProductComponent } from "./components/products/list-product/list-product.component";
import { AddCustomerComponent } from "./components/customers/add-customer/add-customer.component";
import { DetailCustomerComponent } from "./components/customers/detail-customer/detail-customer.component";
import { ListCustomerComponent } from "./components/customers/list-customer/list-customer.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren: () =>
      import("../app/components/customers/customers.module").then(
        (r) => r.CustomersModule
      ),
  },
  {
    path: "products",

    loadChildren: () =>
      import("../app/components/products/products.module").then(
        (p) => p.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
