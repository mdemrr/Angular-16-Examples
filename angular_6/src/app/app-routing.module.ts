import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { AboutComponent } from "./components/about/about.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import {
  canActivatChildeGuard,
  canActivateGuard,
  canDeactivateGuard,
  canMacthAdminGuard,
} from "./guards/guards";
import { DetailsComponent } from "./components/details/details.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home", title: "Home Page" },
  { path: "home", component: HomeComponent, title: "Home Page" },
  {
    path: "product",
    component: ProductComponent,
    title: "Products",
    canActivate: [canActivateGuard],
    canActivateChild: [canActivatChildeGuard],
    canDeactivate: [canDeactivateGuard],
    children: [
      {
        path: "",
        title: "Admin Page",
        component: DetailsComponent,
        //Bu durumda adminGuard aktif ise DetailComponent'ı açar
        canMatch: [canMacthAdminGuard],
      },
      {
        path: "detail",
        title: "Product Detail",
        //Bu şekilde de path'a data yollayabiliyoruz.
        data: { data1: "data1", data2: "data2" },
        component: DetailsComponent,
      },
      {
        path: "detail/:id",
        title: "Product Detail",
        component: DetailsComponent,
      },
    ],
  },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "**", component: NotfoundComponent, title: "Not Found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
