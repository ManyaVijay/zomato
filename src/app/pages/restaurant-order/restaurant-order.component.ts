import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrls: ['./restaurant-order.component.css']
})
export class RestaurantOrderComponent {
  items: any[]=[]

  constructor(private activet:ActivatedRoute, private servic:CategoryService){
    this.activet.params.subscribe((res: any) => {
      this.loadFoodData(res.categoryname)
    })
  }
  

 loadFoodData(name:string){
  this.servic.getFood(name).subscribe((res: any)=>{
    this.items=res.data
  })
 }
}
