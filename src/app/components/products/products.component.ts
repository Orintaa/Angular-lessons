import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public vardai=['Jonas', 'Antanas', 'Kestas'];
  // public newVardas:string='';
  // public products:Product[] =[];
  

  constructor() { }

  ngOnInit(): void {
  }

  public addNewVardas(vardas:HTMLInputElement){ //(newVardas)
    // this.vardai.push(this.newVardas);
    // this.newVardas='';
    if(vardas.value!=''){
      this.vardai.push(vardas.value);
      vardas.value='';
    }
  } 
    
  public removeVardas(i:number){
    this.vardai.splice(i, 1);
  }

}
