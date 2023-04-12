import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  storeInfo : StoreData;
  isImageShown:boolean = true;
  
  constructor(){
    this.storeInfo = new StoreData("ITI Store","https://picsum.photos/200/300",["Cairo","Qena","Alex"]);
  }
  toggleImage(){
    this.isImageShown = !this.isImageShown;
  }
}
