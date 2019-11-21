import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  errorMessage: string;

  constructor() { }


  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=>{
            console.log("User create with");
            resolve();
          },
          (error)=>{
              this.errorMessage=error;
              reject(error);
          }
        );
      }
    );
  }

  signIn(email: string, password: string){
    return new Promise(
      (resolve, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{
            console.log("Sign in");
            resolve();
          },
          (error)=>{
            reject(error);
          }
        );
      }
    );
  }
  signOut(){
    firebase.auth().signOut();
  }

}
