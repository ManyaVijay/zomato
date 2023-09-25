import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginObject: any = {
    'userName':'',
    'password':''
  }


  constructor(private serive:CategoryService){}

  ngOnInIt(){}

  login(){
    this.serive.getLogin(this.loginObject).subscribe((res)=>{
      
    })
  }


}
