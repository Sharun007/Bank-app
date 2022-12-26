import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''
  
  dateandtime:any

  acno:any

  // acno1=''
  // psw1=''
  // amnt1=''

  user=''

constructor(private ds:DatabaseService,private fb:FormBuilder,private router:Router){
  
  this.dateandtime=new Date()

  //access username
  this.user=this.ds.currentuser
}

depositForm=this.fb.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],psw1:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

withdrawForm=this.fb.group({acno2:['',[Validators.required,Validators.pattern('[0-9]+')]],psw2:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt2:['',[Validators.required,Validators.pattern('[0-9]+')]]})

ngOnInit(): void{
  if(!localStorage.getItem('currentacno')){
    alert('please login first')
    this.router.navigateByUrl('')
  }
}


  deposit(){
    var acno=this.depositForm.value.acno1
    var psw=this.depositForm.value.psw1
    var amnt=this.depositForm.value.amnt1
  if(this.depositForm.valid){
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} credited to your account and the balance is ${result}`)
    }
    else{
      alert('incorrect username or password')
    }
  }
  else{
    alert('invalid form')
  }

  }

  withdraw(){
    var acno1=this.withdrawForm.value.acno2
    var psw1=this.withdrawForm.value.psw2
    var amnt1=this.withdrawForm.value.amnt2
   if(this.withdrawForm.valid){
    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1} debited from your account and the balance is ${result}`)
    }
   }
   else{
    alert('invalid form')
  }
   
  }
  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('')

  }
  deleteconfirm(){
    this.acno=JSON.parse(localStorage.getItem('currentacno') || '')

  }
}

  


