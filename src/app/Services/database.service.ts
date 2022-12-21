import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currentuser=""
  currentacno=""

  constructor() { }

  userdetails:any={
    1000:{acno:1000,username:'anu',password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:'amal',password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:'arun',password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:'mega',password:123,balance:0,transaction:[]}
  }

     register(acno:any,uname:any,psw:any){
      var userdetails=this.userdetails
      if(acno in userdetails){
        return false
      }
      else{
        userdetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
        return true
        
      }
     }
     
login(acno:any,psw:any){
  
  var userdetails=this.userdetails
 
  if(acno in userdetails){
   if(psw==userdetails[acno]["password"]){
    //store acno
    this.currentacno=acno
    //store username
    this.currentuser=userdetails[acno]['username']
     return true
   }
   else{
     return false
   }
  }
  else{
    return false
  }
  }
  deposit(acno:any,password:any,amount:any){
    var userdetails=this.userdetails
    var amnt=parseInt(amount)
    if(acno in userdetails){
      if(password==userdetails[acno]['password']){
        userdetails[acno]['balance']+=amnt
        userdetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
        return userdetails[acno]['balance']
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }
 withdraw(acno:any,password:any,amount:any){
  var userdetails=this.userdetails
  var amnt=parseInt(amount)
  if(acno in userdetails){
    if(password==userdetails[acno]["password"]){
      if(amnt<=userdetails[acno]["balance"]){
        userdetails[acno]["balance"]-=amnt
        userdetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})

        return userdetails[acno]["balance"]
      }
      else{
        alert('insufficient balance')
        return false
      }

    }
    else{
      alert('incorrect password')
      return false
    }
  }
  else{
    alert('incorrect acno')
    return false
  }

 }

 gettransaction(acno:any){
  return this.userdetails[acno]['transaction']
 }

}

