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
  x:string|number=10; //property can have either string value as well as number
  y:any=20;

  handleClickEvent() {
    let x:number = 30; //variables with number datatype
    this.x = 'any value';
    console.log("Function called!!!!")
    this.otherFunction();
  }

  otherFunction(){
    let a:any = true;
    console.log("other function")
  }

  sum(a:number,b:number){
    console.log(a+b);
  }

  handleEvent(event:Event){
    console.log("function called",event.type)
    console.log("function called",event.target)
    console.log("function called",(event.target as Element).classList)
    console.log("value",(event.target as HTMLInputElement).value)
  }

}
