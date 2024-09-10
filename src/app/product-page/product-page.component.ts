import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
 
  newProductForm!:FormGroup;
  constructor(private addProduct:FormBuilder){

  }
 
 
  ngOnInit(): void {
    this.newProductForm=this.addProduct.group({
      
      productName:['',Validators.required],
      enterPrice:['',Validators.required],
      manufacturingDate:['',Validators.required],
      expirationDate:['',Validators.required],
      addImage:[''],
    })
   
  }


}
