import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  username:string;
  address:string;
  facility:string;
  hobbies:any=[];
  doj : Date;
  salary: number;
  gender:string;


  constructor(){
    this.username='tarun';
    this.address='Hyderabad';
    this.facility='HDC3B';
    this.hobbies= ['Running','Zumba','Reading','Learning','Cycling'];
    this.doj= new Date();
    this.salary=12345
    this.gender='m'

  }


}
