import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerLoginComponent } from '../owner-login/owner-login.component';
import { RegistershopService } from './registershop.service';

@Component({
  selector: 'app-registershop',
  templateUrl: './registershop.component.html',
  styleUrls: ['./registershop.component.css']
})
export class RegistershopComponent implements OnInit {
  body: any;
  xy:any
  constructor(private router: Router,private registerservice: RegistershopService) { }

  ngOnInit() {
  }

  createShop(shid,shnm,shad,shty,onnm,oncn){
    console.log('success',shid)
    console.log('success',shnm)
     this.body = {
      'ShopName': shnm,
      'ShopId': parseInt(shid),
      'ShopType':shty,
      'ShopAddress': shad,
      'OwnerContactNo': parseInt(oncn),
      'OwnerName':onnm
    }
    console.log('final body',this.body)
    this.registerservice.create(this.body).subscribe((result: any) => {
      console.log('result' ,result);
      this.xy = result

      });

     this.router.navigate(['/AddProduct'])
     
  }

  Fetchshop(){
    console.log('fetch success')
    this.registerservice.allshop().subscribe((result: any) => {
      console.log('result' ,result);

      })
  }

backToHome(){
  this.router.navigate(['/home'])
}

}
