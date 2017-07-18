import { NgModule } from '@angular/core';

import { FdSummaryComponent } from './summary/fd.summary.component';

import { FdRoutingModule } from './fd-routing.module';

@NgModule({
  imports: [
    FdRoutingModule
  ],
  declarations: [
    FdSummaryComponent
  ]
})
export class FdModule { }
