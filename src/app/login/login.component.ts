import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template:`<div>
  <h1>Welcome to login page</h1>
  <h4>Enter your Credentials</h4>
   Enter your name <input type="text" placeholder="Enter name"/> <br>
   Enter your Password <input type="password" placeholder="Enter password"/> <br>
   <button class="btn btn-primary"> Submit</button>
</div>`,

   styles: ['h1{color:orange;font-size:25px;text-align:center}'],
 /*  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] */
})
export class LoginComponent {

}
