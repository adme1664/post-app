import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: String;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

            

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signUpForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z],{6,}/)]]
      }
    );
  }
  onSubmit(){
    const email=this.signUpForm.get('email').value;
    const password=this.signUpForm.get('password').value;
    this.authService.createNewUser(email,password).then(
      ()=>{
        this.router.navigate(['/posts']);
      },
      (error)=>{
        this.errorMessage=error;
      }
    )
  }
}
