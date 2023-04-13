import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
  categories: ICategory[];
  categroyId:number=0;
  orderTotalPrice:number = 0;

  constructor(){
    this.categories = [
      {id:1,name:"Lenovo"},
      {id:2,name:"Dell"},
      {id:3,name:"Samsung"},
      {id:4,name:"Huawei"},
    ];
  }


}
