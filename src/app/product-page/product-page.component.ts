import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { IStudent } from './model/student';
import { error } from 'console';



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
  stdData: IStudent[] = [];
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
          next: (res: IStudent[]) => this.stdData = res,
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

      productName: ['', [Validators.required, Validators.minLength(1)]],
      enterPrice: ['', [Validators.required, Validators.minLength(1)]],
      manufacturingDate: ['', [Validators.required, Validators.minLength(1)]],
      enterCompanayName: ['', [Validators.required, Validators.minLength(1)]],
      enterSalesRefName: ['', [Validators.required, Validators.minLength(1)]],
      expirationDate: ['', [Validators.required, Validators.minLength(1)]]

    })
  }
}
