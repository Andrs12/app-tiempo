import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-tiempo';

  constructor(private location: Location, private router: Router){
    console.log(this.location.path())
  }

  ngOnInit() {
    if(!this.checkIfLogged() && this.location.path() != '/login'){
      alert("First you need to login");
      this.goTo("/login");
    }
  }

  goTo(route: string){
    this.router.navigate([route]);
  }
  checkIfLogged(){
    return sessionStorage['clientData'] == null ? false : true;

  }
}

