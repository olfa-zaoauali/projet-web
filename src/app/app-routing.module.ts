import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { RomantiqueComponent } from './romantique/romantique.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'films',
    component:FilmsComponent
  },
  {
    path:'romantique',
    component:RomantiqueComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
