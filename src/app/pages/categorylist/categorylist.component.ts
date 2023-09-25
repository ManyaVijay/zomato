import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  foodList: any;
 

  constructor(private servic:CategoryService, private router: Router){}

  ngOnInit(): void{
    this.getData()
  }

  getData(){
    this.servic.getCategory().subscribe((res)=>{
      this.foodList = res.data
      //console.log(data)
    })
  }

  navigate(items: string){
    this.router.navigate(['/restaurant-items',  items])
  }
}
