import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepoComponent} from "./depo.component";
import {  RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 

export const route=[
  {path:'',component:DepoComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [DepoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(route)
  ]
})
export class DepoModule { }

