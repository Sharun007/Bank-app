import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
aim="Your Perfect Banking Partner"
data="Enter ac number"
acno=''
psw=''

userdetails:any={
  1000:{acno:1000,username:'anu',password:123,balance:0},
  1001:{acno:1001,username:'amal',password:123,balance:0},
  1002:{acno:1002,username:'arun',password:123,balance:0},
  1003:{acno:1003,username:'mega',password:123,balance:0}
}

// login(){
//  var acno=this.acno
//  var psw=this.psw
//  var userdetails=this.userdetails

//  if(acno in userdetails){
//   if(psw==userdetails[acno]["password"]){
//     alert('login success')
//   }
//   else{
//     alert('incorrect password')
//   }
//  }
//  else{
//   alert('incorrect username')
//  }
// }

login(a:any,b:any){
  this.acno=a.value
  this.psw=b.value
  
  
  var acno=this.acno
  var psw=this.psw
  var userdetails=this.userdetails
 
  if(acno in userdetails){
   if(psw==userdetails[acno]["password"]){
     alert('login success')
   }
   else{
     alert('incorrect password')
   }
  }
  else{
   alert('incorrect username')
  }
 }
// acnochange(event:any){

//   this.acno=event.target.value

  
// }
// newpsw(event:any){
// this.psw=event.target.value



// }
}


