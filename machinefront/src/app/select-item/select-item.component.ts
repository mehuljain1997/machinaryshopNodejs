import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  body = [{'sugar': 35,'chai': 400,'haldi': 150},{'sugar': 40,'chai': 405,'haldi': 155}]
  KeyValue  = ['sugar','chai','haldi']

  backToHome(){
    this.router.navigate(['/home'])
  }

}
