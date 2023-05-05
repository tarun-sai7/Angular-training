import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  users:any=[];

  constructor(private httpclient:HttpService){


  }

  getusers(){
    return this.httpclient.getusers().subscribe((data)=>(this.users=data));
  }

}
