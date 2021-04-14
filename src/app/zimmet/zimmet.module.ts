import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ZimmetComponent} from "./zimmet.component";
import {RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 

export const route=[
  {path:'',component:ZimmetComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [ZimmetComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(route)
  ]
})
export class ZimmetModule { }