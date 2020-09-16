import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopDetailService } from './shop-detail.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  xy:any
  constructor(private route:Router, private shopDetailService: ShopDetailService) { }

  ngOnInit() {
this.fetchAllShopInfo()
  }
  
  fetchAllShopInfo(){
    this.shopDetailService.getAllShopInfo().subscribe((result) => {
      console.log('res',result)
      this.xy = result
console.log('xy',this.xy)
    })


  }

  deleteShop(shopId){
    this.shopDetailService.deleteShop(shopId).subscribe((res) =>{
      console.log('result',res)
      alert(res.message)
      this.fetchAllShopInfo();
    })
  }

  modo(id){
    console.log('shopId',id)
    this.shopDetailService.deleteShop(id).subscribe((res) =>{
      console.log('result',res)
      alert(res.message)
      this.fetchAllShopInfo();
  })
}

backToHome(){
  this.route.navigate(['/home'])
}
}
