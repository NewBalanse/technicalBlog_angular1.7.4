import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MaterialComponent} from './material/material.component';
import {Subject1Component} from './material/subject1/subject1.component';
import {Subject2Component} from './material/subject2/subject2.component';

const route: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class RouterModules {

}
