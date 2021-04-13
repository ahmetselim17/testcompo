import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EkipmanComponent } from './ekipman.component';
import {  RouterModule } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 


export const route=[
  {path:'',component:EkipmanComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [EkipmanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
    
    
    
    
  ]
})
export class EkipmanModule { }
