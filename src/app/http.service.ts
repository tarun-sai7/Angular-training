import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string;

  constructor(private httpclient:HttpClient) {
    this.url="https://jsonplaceholder.typicode.com/users";

  }

 /*  #fetch data */

 getusers(){
  return this.httpclient.get(this.url);
 }
}
