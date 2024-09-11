import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,RouterLink,ReactiveFormsModule,HttpClientModule  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  //  newProductForm!:FormGroup;
  constructor(private addProduct:ProductService){

  }
 
 endPoints:any[]=[]
  ngOnInit(): void {
    // this.newProductForm=this.addProduct.group({
      
    //   productName:['',[Validators.required]],
    //   enterPrice:['',[Validators.required]],
    //   manufacturingDate:['',Validators.required],
    //   expirationDate:['',Validators.required],
    //   enterCompanayName:['',Validators.required],
    //   enterSalesRefName:['',Validators.required]    
    // })
this.addProduct.getLocaleDateFormat()
.subscribe({
  next:res=>{
    this.endPoints=res
    console.log("cdm",this.endPoints);
    
  },
  error(err) {
    
  },
})

  }




// isFiledInvalid(filed:string){
//   const control =this.newProductForm.get(filed);
//   return control?.invalid && control?.dirty;
// }


}
