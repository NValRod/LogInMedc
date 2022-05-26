import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/Home/home.component';
import { UsariosComponent } from "./pages/usarios/usarios.component";
import { RolesComponent } from './pages/roles/roles.component';


const routes: Routes = [

  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'usuarios',
    component: UsariosComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: '',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
