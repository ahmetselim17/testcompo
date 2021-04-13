import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
   loadChildren:()=>import('./test/test.module').then(m=>m.TestModule)
  },
  {
    path:'depo',
   loadChildren:()=>import('./depo/depo.module').then(m=>m.DepoModule)
  },

  {
    path:'ekipman',
   loadChildren:()=>import('./ekipman/ekipman.module').then(m=>m.EkipmanModule)
  },

  // {
  //   path:'zimmet',
  //  loadChildren:()=>import('./zimmet/zimmet.module').then(m=>m.ZimmetModule)
  // },

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
