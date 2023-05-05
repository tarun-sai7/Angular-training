import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:any=[];
  coursedata:any;

  constructor() {
      this.courses = [      {'cid' : 'C001' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Shipra'}, 
         {'cid' : 'C002' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Sheetal'},   
        {'cid' : 'C003' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Shilpa'},     
       {'cid' : 'C004' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Prajwal'},   
         {'cid' : 'C005' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Deepank'},   
       {'cid' : 'C006' , 'cname' : 'Angular', 'cduration' : 5, 'csme': 'Ashwini'},    ]; }




  getcoursebyId(courseid:string){
    for(let i =0;i<this.courses.length;i++)
    if (this.courses[i].cid == courseid){       
       this.coursedata = this.courses[i];   
       return this.coursedata;   
    }
    }
  }
