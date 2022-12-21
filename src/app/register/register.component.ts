import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname=''
  acno=''
  psw=''

  constructor(private ds:DatabaseService,private router:Router ){}

  register(){
   var uname=this.uname
   var acno=this.acno
   var psw=this.psw

   const result=this.ds.register(acno,uname,psw)

   if(result){
    alert('Registration success')
    this.router.navigateByUrl('')
   }
   else{
    alert('user already exists')
    this.router.navigateByUrl('')

   }


  }
}
