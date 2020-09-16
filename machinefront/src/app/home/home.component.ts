import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { runInContext } from 'vm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectItem(){
    this.router.navigate(['/selectItem'])
  }

  LoginAsOwner() {
     console.log('inside login')
    this.router.navigate(['/loginowner'])  
    
  }

  ShopDetail(){
    this.router.navigate(['/shopDetail'])
  }

  LoginAsCustomer() {
    console.log('inside login')
   this.router.navigate(['/logincustomer'])  
   
 }

 RegisterShop() {
  console.log('inside register')
 this.router.navigate(['/registershop'])  
 
}


}
