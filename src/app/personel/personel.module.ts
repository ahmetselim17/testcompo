import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonelComponent } from './personel.component';
import {RouterModule } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 


import {MatCheckboxModule} from '@angular/material/checkbox'; 

export const route=[
  {path:'',component:PersonelComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [PersonelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
    
    
    
  ]
})
export class PersonelModule { }
