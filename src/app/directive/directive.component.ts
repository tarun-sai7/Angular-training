import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  sampledata : any = []; 
  flag : boolean;
  attcolor : string; 
  constructor(){   
     this.attcolor = 'purple';
    this.flag = true;   
    this.sampledata=[     
      {id:1,name:'Admin1',age: 20},   
      {id:2,name:'Admin2',age: 21},   
      {id:3,name:'Admin3',age: 22}, 
      {id:4,name:'Admin4',age: 23}, 
      {id:5,name:'Admin5',age: 24}, 
      {id:6,name:'Admin6',age: 25}, ];  } 

      toggle(){    this.flag = !this.flag;  }
}
