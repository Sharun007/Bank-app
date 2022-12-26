import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  userdetails:any
  currentuser=""
  currentacno=""

  constructor() {
    this.getdetails()
   }

  savedetails(){
    if(this.userdetails){
      localStorage.setItem('database',JSON.stringify(this.userdetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))

    }
    if(this.currentacno){
      localStorage.setItem('currentacno',JSON.stringify(this.currentacno))

    }
  }

  getdetails(){
    if(localStorage.getItem('database')){
      this.userdetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
    }
    if(localStorage.getItem('currentacno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
    }
    
  }
  

  // userdetails:any={
  //   1000:{acno:1000,username:'anu',password:123,balance:0,transaction:[]},
  //   1001:{acno:1001,username:'amal',password:123,balance:0,transaction:[]},
  //   1002:{acno:1002,username:'arun',password:123,balance:0,transaction:[]},
  //   1003:{acno:1003,username:'mega',password:123,balance:0,transaction:[]}
  // }

     register(acno:any,uname:any,psw:any){
      var userdetails=this.userdetails
      if(acno in userdetails){
        return false
      }
      else{
        userdetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
        this.savedetails()
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
    this.savedetails()

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
        this.savedetails()

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
        this.savedetails()

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

