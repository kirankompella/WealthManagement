import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { FdSummaryComponent } from './summary/fd.summary.component';

const routes: Routes = [
  { path: '', component: FdSummaryComponent,
    children: [
      //{ path: ':id', component: HeroDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FdRoutingModule {}
