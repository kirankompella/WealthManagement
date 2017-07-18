import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'fd', pathMatch: 'full'} 
 ,{ path: 'fd', loadChildren: './fd/summary/fd.module#FdModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
