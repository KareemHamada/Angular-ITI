import { StaticProductService } from './../../../Services/static-product.service';
import { Component, EventEmitter, Input,OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Output() totalPriceChanged : EventEmitter<number>;
  Orderdate:Date;
  // products:IProduct[];
  productsListOfCateogry:IProduct[] = [];
  orderTotalPrice:number = 0;
 @Input() sentCategroyId:number=0;

  constructor(private staticProductService : StaticProductService){
    this.totalPriceChanged = new EventEmitter<number>();

    // this.products = [
    // {id: 1,categoryId: 1,name:"Lenovo 011",price:790000000,quantity:6,imageUrl:"https://picsum.photos/50/50"},
    // {id: 2,categoryId: 2,name:"Dell 12",price:27456,quantity:2,imageUrl:"https://picsum.photos/50/50"},
    // {id: 3,categoryId: 3,name:"Samsung 101",price:2334.4345,quantity:0,imageUrl:"https://picsum.photos/50/50"},
    // {id: 4,categoryId: 4,name:"Huawei 29",price:2245,quantity:1,imageUrl:"https://picsum.photos/50/50"}];


    this.Orderdate = new Date();
    // this.productsListOfCateogry = this.products;
    // this.productsListOfCateogry = this.staticProductService.getAllProducts();
  }
  ngOnInit(): void {
    this.productsListOfCateogry = this.staticProductService.getAllProducts();
  }
  ngOnChanges(): void {
    // this.filerProductsByCatId();
    this.productsListOfCateogry = this.staticProductService.getProductsByCategoryId(this.sentCategroyId);
  }

  MinusQty(price:number,count:any){
    let itemsCount:number;
    // convert from any to number
    // itemsCount = parseInt(count);
    // itemsCount = Number(count);
    // itemsCount = count as number;
    itemsCount = +count;
    this.orderTotalPrice = itemsCount * price;

    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // ChaneCat(){
  //   this.sentCategroyId = 1;
  // }

  prdTrackByFn(index:number,prd:IProduct){
    return prd.id;
  }

  // private filerProductsByCatId(){
  //   if(this.sentCategroyId != 0)
  //     this.productsList = this.products.filter(prd => prd.categoryId == this.sentCategroyId);
  //   else
  //     this.productsList = this.products;
  // }
}
