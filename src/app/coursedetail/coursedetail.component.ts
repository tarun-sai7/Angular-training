import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {

courseno:any;
course:any;

  constructor(private courseservice:CourseService ,private route:ActivatedRoute){}

    ngOnInit () : void { 
      //subscribe the parameter passed in the route 
      this.route.paramMap.subscribe((params)=>{this.courseno=params.get('cno');   
    //value from the route is to be passed into the service method   
     //this service method returns the result with the selected courseid passed   
     this.course = this.courseservice.getcoursebyId(this.courseno);   
      console.log(this.course);  });  }
}
