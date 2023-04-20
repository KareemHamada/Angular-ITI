import { Component, ElementRef, ViewChild ,AfterViewInit} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements AfterViewInit{
  categories: ICategory[];
  categroyId:number=0;
  receivedOrderTotalPrice:number = 0;
  // clientNameInput:ElementRef = {} as ElementRef;
  // clientNameInput?:ElementRef;
  // clientNameInput:ElementRef | undefined = undefined;
  @ViewChild('clientNameInp') clientNameInput!:ElementRef;
   @ViewChild(ProductListComponent) prdListComponentObj!: ProductListComponent;
  constructor(){
    this.categories = [
      {id:1,name:"Lenovo"},
      {id:2,name:"Dell"},
      {id:3,name:"Samsung"},
      {id:4,name:"Huawei"},
    ];
  }

  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice = totalPrice;
  }
  ngAfterViewInit(): void {
    this.clientNameInput.nativeElement.value = "Your Name Here";
    this.clientNameInput.nativeElement.style.border = "2px solid red";

    // console.log(this.prdListComponentObj. products);
  }
}
