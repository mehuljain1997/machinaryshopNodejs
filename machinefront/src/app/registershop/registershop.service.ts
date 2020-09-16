import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistershopService {

  constructor(private http: HttpClient) { }

   create(body: any): Observable<any> {
     console.log('inside create',body)
    // return body
     return this.http.post("http://localhost:1997/createshop", body )

  }

  allshop(){

    return this.http.get("http://localhost:1997/fetchAllShop")
  }
}
