import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadUserComponent } from "./components/read-user/read-user.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { NotFoundError } from "rxjs";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { UserdetailComponent } from "./components/userdetail/userdetail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "read",
  },
  {
    path: "read",
    component: ReadUserComponent,
  },
  {
    path: "read",
    children: [
      { path: "detail", component: UserdetailComponent },
      { path: "detail/:id", component: UserdetailComponent },
    ],
  },
  {
    path: "create",
    component: CreateUserComponent,
  },
  {
    path: "create/:id",
    component: CreateUserComponent,
  },
  {
    path: "**",
    component: NotfoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
