import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IStudent } from "./model/student";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'assets/table.json';
  private https: HttpClient = inject(HttpClient);

  getAllStudent(): Observable<IStudent[]> {
    return this.https.get<IStudent[]>(this.baseUrl)
      .pipe(
        tap(data => console.log("hi", data))
      );
  }

}

