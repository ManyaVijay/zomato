import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any>{
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetFoodCategory");
  }

  getFood(name:string){
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?category='+ name)
  }
  getLogin(obj:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/Login',obj)
  }
}
