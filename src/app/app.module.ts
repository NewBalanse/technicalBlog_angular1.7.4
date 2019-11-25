import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {RouterModules} from './router.modules';
import {MaterialComponent} from './material/material.component';
import {Subject1Component} from './material/subject1/subject1.component';
import {Subject2Component} from './material/subject2/subject2.component';
import {RouterChildrenModule} from './router.children.module';
import {IllationComponent} from './material/illation/illation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MaterialComponent,
    Subject1Component,
    Subject2Component,
    IllationComponent
  ],
  imports: [
    BrowserModule,
    RouterChildrenModule,
    RouterModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
