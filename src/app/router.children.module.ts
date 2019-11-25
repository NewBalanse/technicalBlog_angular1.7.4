import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponent} from './material/material.component';
import {Subject1Component} from './material/subject1/subject1.component';
import {Subject2Component} from './material/subject2/subject2.component';
import {IllationComponent} from './material/illation/illation.component';

const routes: Routes = [{
  path: 'material',
  component: MaterialComponent,
  children: [
    {
      path: '',
      redirectTo: 'subject1',
      pathMatch: 'full'
    }, {
      path: 'subject1',
      component: Subject1Component
    }, {
      path: 'subject1/:name',
      component: Subject1Component
    },
    {
      path: 'subject2',
      component: Subject2Component
    }, {
      path: 'subject2/:name',
      component: Subject2Component
    },
    {
      path: 'illation',
      component: IllationComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterChildrenModule {

}
