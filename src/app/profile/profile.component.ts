import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscriber, Subscription } from 'rxjs';
import { __values } from 'tslib';
// import { CanActivateFn } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public ApiServ:ApiService){}

  datavalue : any = null;
  ggg : Subscription[]=[]
   


datainfo(){
 let gggk  = this.ApiServ.get().subscribe({
  next:(info: any)=>{
    console.log(info.results[0])
    this.datavalue = info.results[0];


},
error:(err:string)=>{
  console.log(err)
}
 })

 
 this.ggg.push(gggk);
}


}
