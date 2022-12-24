import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno=''
  psw=''
  amnt=''

  acno1=''
  psw1=''
  amnt1=''

  user=''

constructor(private ds:DatabaseService,private fb:FormBuilder){
  //access username
  this.user=this.ds.currentuser
}

depositForm=this.fb.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],psw1:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

withdrawForm=this.fb.group({acno2:['',[Validators.required,Validators.pattern('[0-9]+')]],psw2:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt2:['',[Validators.required,Validators.pattern('[0-9]+')]]})


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
}

  


