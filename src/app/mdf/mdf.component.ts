import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {

  loginForm :FormGroup;    
  constructor(){      
    this.loginForm = new FormGroup({       
    //form controls       
    uname : new FormControl('',[Validators.required,Validators.minLength(8)]),       
    pwd : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),       
    Security : new FormGroup({         
      captcha : new FormControl(),         
      otp : new FormControl(),       
    }),     
   }); 
    }   
  login(formdata:any){   
        alert('welcome  '+formdata.uname +'!'); 
     }

}
