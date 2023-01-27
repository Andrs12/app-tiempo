import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  clientData =
  {
    'user': '',
    'password': ''
  }
  loginError = false;

  registeredUsers = [
    {user:'agomezal', 'pass':'1234'},
    {user:'pepe', 'pass':'hola'},

  ]
  constructor(private router: Router){

  }

  login(){
    this.registeredUsers.forEach(registeredUser => {
      if(registeredUser.user === this.clientData.user && registeredUser.pass === this.clientData.password){
        sessionStorage.setItem('clientData',JSON.stringify(this.clientData));
        this.loginError = true;
        this.router.navigate(['/']);
      } else {
        this.loginError = true;
      }
    });
  }
}
