import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { ReadUserComponent } from "./components/read-user/read-user.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, ReadUserComponent, NotfoundComponent, UserdetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
