import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDetailService {

  constructor(private http: HttpClient) { }

  getAllShopInfo(){
    console.log('inside getAllShopInfo')
    return this.http.get('http://localhost:1997/fetchAllShop')

  }

  // deleteShop(body){
  //   console.log('inside delete service',body)
  //   return this.http.delete('http://localhost:1997/deleteshop/'+ body)
  // }

  deleteShop(data: any): Observable<any> {  
    console.log('data id',data) 
   // console.log('final PId',this.ProductId)
   return this.http.delete<any>('http://localhost:1997/deleteshop/' + data);
  }
}
