import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AppComponent } from './app.component';
import { UsariosComponent } from './pages/usarios/usarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { HomeComponent } from './pages/Home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    UsariosComponent,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SignInModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
