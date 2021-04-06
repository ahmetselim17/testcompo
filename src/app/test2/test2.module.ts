import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { RouterModule } from '@angular/router';


import {MatSelectModule} from '@angular/material/select'; 

export const route=[
  {path:'',component:Test2Component,pathMatch:'full'}
];

@NgModule({
  declarations: [Test2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatSelectModule
  ]
})
export class Test2Module { }
