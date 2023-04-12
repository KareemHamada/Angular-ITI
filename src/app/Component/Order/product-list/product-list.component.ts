import { Component } from '@angular/core';
import { count } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:IProduct[];
  orderTotalPrice:number = 0;
  categories:ICategory[];
  categroyId:number=0;
  constructor(){
    this.products = [
    {id: 1,categoryId: 1,name:"Lenovo 011",price:7987,quantity:6,imageUrl:"https://picsum.photos/50/50"},
    {id: 2,categoryId: 2,name:"Dell 12",price:2778,quantity:10,imageUrl:"https://picsum.photos/50/50"},
    {id: 3,categoryId: 3,name:"Samsung 101",price:2334,quantity:0,imageUrl:"https://picsum.photos/50/50"},
    {id: 4,categoryId: 4,name:"Huawei 29",price:2245,quantity:31,imageUrl:"https://picsum.photos/50/50"}];
  
    this.categories = [
      {id:1,name:"Lenovo"},
      {id:2,name:"Dell"},
      {id:3,name:"Samsung"},
      {id:4,name:"Huawei"},
    ];
  }

  MinusQty(price:number,count:any){
    let itemsCount:number;
    // convert from any to number
    // itemsCount = parseInt(count);
    // itemsCount = Number(count);
    // itemsCount = count as number;
    itemsCount = +count;

    this.orderTotalPrice = itemsCount * price;
  }

  ChaneCat(){
    this.categroyId = 1;
  }
}
