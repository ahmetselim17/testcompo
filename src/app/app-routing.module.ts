import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
   loadChildren:()=>import('./test/test.module').then(m=>m.TestModule)
  },

  {
    path:'test2',
   loadChildren:()=>import('./test2/test2.module').then(m=>m.Test2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
