import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {  RouterModule } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 


export const route=[
  {path:'',component:TestComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [TestComponent],
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
export class TestModule { }
