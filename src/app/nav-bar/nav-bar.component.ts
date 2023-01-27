import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {

  sessionStorage: any;
  searchInput = '';


  constructor(private router: Router){
  }

  ngInit(){
  }


  goToHome(){
    if(this.checkIfLogged()){
      this.goTo("/");
    } else {
      alert("First you need to login")
      this.goTo("/login");
    }
  }

  checkIfLogged(){
    return sessionStorage['clientData'] == null ? false : true;

  }

  goTo(route: string){
    this.router.navigate([route]);
  }


}
