import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrlEndPoint:string='assets/Table.json'
  private http:HttpClient=inject(HttpClient)
  
    getLocaleDateFormat():Observable<any[]>{
      return this.http.get<any[]>(this.baseUrlEndPoint)
      .pipe(
        tap(data=>console.log("service",data))
      )
    }
   }

