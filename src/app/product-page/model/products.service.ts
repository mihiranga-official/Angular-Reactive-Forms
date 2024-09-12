

import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
import { IApi } from "./apiData";

@Injectable({
    providedIn:'root'
})
export class ProductService {
 //identifying the base url end point
 private baseUrls:string='https://api.ipify.org?format=json';
 private https:HttpClient =inject(HttpClient)


 getData():Observable<IApi[]>{
    return this.https.get<IApi[]>(this.baseUrls)
    .pipe(
        tap(dat=>console.log("KK",dat)
        )
    )
 }

}