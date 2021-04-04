import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { RouterModule } from '@angular/router';

export const route=[
  {path:'',component:Test2Component,pathMatch:'full'}
];

@NgModule({
  declarations: [Test2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class Test2Module { }
