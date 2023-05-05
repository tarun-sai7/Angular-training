import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DatabindComponent } from './databind/databind.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './custom.pipe';
import { CourseService } from './course.service';
import { HttpComponent } from './http/http.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DatabindComponent,
    LoginComponent,
    DirectiveComponent,
    PipeComponent,
    CustomPipe,
    HttpComponent,
    CoursedetailComponent,
    TdfComponent,
    MdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
