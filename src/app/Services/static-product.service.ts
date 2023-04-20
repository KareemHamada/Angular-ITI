import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  private prdList : IProduct[];
  constructor() {
    this.prdList = [
      {id: 1,categoryId: 1,name:"Lenovo 011",price:790000000,quantity:6,imageUrl:"https://picsum.photos/50/50"},
      {id: 2,categoryId: 2,name:"Dell 12",price:27456,quantity:2,imageUrl:"https://picsum.photos/50/50"},
      {id: 3,categoryId: 3,name:"Samsung 101",price:2334.4345,quantity:0,imageUrl:"https://picsum.photos/50/50"},
      {id: 4,categoryId: 4,name:"Huawei 29",price:2245,quantity:1,imageUrl:"https://picsum.photos/50/50"}];
  }


  getAllProducts():IProduct[]{
    return this.prdList;
  }
  getProductById(pID:number):IProduct | null{
    let found = this.prdList.find(prd => prd.id == pID);
    return found?found: null;
  }
  getProductsByCategoryId(cID:number):IProduct[]{
    if(cID != 0)
      return this.prdList.filter(prd => prd.categoryId == cID);
    else
    return this.prdList;
  }

  addNewProduct(prd:IProduct){
    this.prdList.push(prd);
  }

}
