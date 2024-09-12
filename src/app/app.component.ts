import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductPageComponent } from "./product-page/product-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {




}
