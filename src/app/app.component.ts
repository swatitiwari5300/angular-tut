import { Component, effect, Signal, signal, WritableSignal,computed } from '@angular/core';
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
  /*
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
    */

  // name = ""
  // displayName =""
  // email=""
  // getName(event:Event){
  //   const name = (event.target as HTMLInputElement).value;
  //   console.log(name);
  //   this.name = name;
  // }
  // showDisplayName(){
  //   this.displayName = this.name;
  // }
  // setName(){
  //   this.name = "Swati"
  // }

  // getEmail(val:string){
  //   console.log(val);
  //   this.email = val;
  // }

  //   setEmail(){
  //   this.email = "Swati@gmail.com"
  // }

  // display = true;
  // x = 10;
  // toggleProp = true;

  // hide(){
  //   this.display = false;
  // }

  // show(){
  //   this.display = true;
  // }

  // toggle(){
  //   this.display = !this.display;
  // }

  // toggleTwo(){
  //   this.toggleProp = !this.toggleProp;
  // }

  // color = 1;

  // handleColor(val:number){
  //   this.color = val;
  // }

  // handleInput(event:Event){
  //   this.color = parseInt((event.target as HTMLInputElement).value);
  // }

  color = 'red';

  handleColor(val:string){
    this.color = val;
  }

  users = ["Anil", "Swati", "Tony", "Raj"]
  students = [
    {name: "anil", age: 29, email:"anil@example.com"},
    {name: "swati", age: 23, email:"swatit@example.com"},
    {name: "raj", age: 20, email:"rajj@example.com"},
    {name: "rohit", age: 22, email:"rohitD@example.com"},
  ]

  getName(event:string){
    console.log(event);
  }

  count = signal(10);
  x = 10;

// constructor(){
//   effect(() => {console.log(this.count())});
// }

  updateValue(val:string){
    if(val === 'inc'){
    //this.x = this.x+1
    this.count.set(this.count()+1)
    }else{
    this.count.set(this.count()-1)
    }
  }

  data = signal<number | string>(10);
  data2 : WritableSignal<number | string> = signal(20);
  count2:Signal<number> = computed(()=>100)

  updateSignal(){
    this.data.set("hello");
  }

  x1 = 10;
  y1 = 20;

  z1 = this.x1+this.y1;

  showValue(){
    console.log(this.z1);
    this.x1 = 100;
    console.log(this.z1);
  }

  x2 = signal(10);
  y2 = signal(20);
  z2 = computed(()=>this.x2()+this.y2());

  showValueComputedSig(){
    console.log(this.z2());
    this.x2.set(100);
    console.log(this.z2());
  }

  updateX2(){
    this.x2.set(1000);
  }

  username = signal('Anil');
  count1 =signal(0);
  displayHeading = false

  constructor(){
    effect(() => {
      console.log(this.username())
      if(this.count1() === 2){
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000)
      }else{
        this.displayHeading = false;
      }
    })
  }

  toggleVal(){
    this.count1.set(this.count1()+1);
  }
}
