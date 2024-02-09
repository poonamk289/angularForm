import { Component } from '@angular/core';
import{ Router }  from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {


  constructor(private router : Router){}
  
  // connect():void {
  //   this.router.navigateByUrl('/profile'); 
  // }
  connect(type: string): void {
    console.log(type)

    localStorage.setItem("datastored",type)
    // this.sharedSrvc.isLoggedin = true
    // this.sharedSrvc.publishLogin()
    this.router.navigateByUrl('/profile');
  }
}