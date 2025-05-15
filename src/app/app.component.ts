import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  name:string = 'Swati'; //String datatype is defined
  x=10; //properties
  y=20;

  handleClickEvent() {
    let x = 30; //variables
    console.log("Function called!!!!")
    this.otherFunction();
  }

  otherFunction(){
    console.log("other function")
  }

}
