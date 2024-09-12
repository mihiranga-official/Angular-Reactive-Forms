import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { error } from 'console';
import { IApi } from './apiData';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,

    FormsModule,
    ReactiveFormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})

export class ProductPageComponent implements OnInit {


  newProductForm!: FormGroup;
  stdData!: IApi ;
  private fb: FormBuilder = inject(FormBuilder);
  private service: ProductService = inject(ProductService);

  ngOnInit(): void {
    this.formGroups()
    this.allStudent()

  }


  allStudent() {
    this.service.getAllStudent()
      .subscribe(
        {
          next: (res: IApi) => this.stdData = res,
          error: (err: any) => console.log("err", err)

        }
      )

  }

  isFiledInvalid(filed: string) {
    const control = this.newProductForm.get(filed);
    return control?.invalid && control?.dirty;
  }



  formGroups() {
    this.newProductForm = this.fb.group({

      productName: ['', [Validators.required, Validators.minLength(5)]],
      enterPrice: ['', [Validators.required, Validators.minLength(5)]],
      manufacturingDate: ['', [Validators.required, Validators.minLength(5)]],
      enterCompanayName: ['', [Validators.required, Validators.minLength(5)]],
      enterSalesRefName: ['', [Validators.required, Validators.minLength(5)]],
      expirationDate: ['', [Validators.required, Validators.minLength(5)]]

    })
  }
}
