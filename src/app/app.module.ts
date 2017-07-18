/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* Angular Component */
import { AppComponent } from './app.component';

/* custom modules */
import { FdModule } from './fd/fd.module'

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule
   ,FdModule
  ,AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
