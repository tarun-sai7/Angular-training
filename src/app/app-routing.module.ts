import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DatabindComponent } from './databind/databind.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpComponent } from './http/http.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

const routes: Routes = [{
  path :'course',component:CourseComponent,children:[{path:':cno',component:CoursedetailComponent}]},
  {path :'databind',component:DatabindComponent},
  {path :'',component:LoginComponent},
  {path :'directive',component:DirectiveComponent},
  {path :'pipes',component:PipeComponent},
  {path :'httpcomponent',component:HttpComponent},
  {path :'tdf',component:TdfComponent},
  {path :'mdf',component:MdfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
