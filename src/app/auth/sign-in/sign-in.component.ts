import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  errorMessage: string;

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z],{6,}/)]]
      }
    );
  }

  onSubmit(){
    const email=this.loginForm.get('email').value;
    const password=this.loginForm.get('password').value;
    this.authService.signIn(email,password).then(
      ()=>{
        this.router.navigate(['/posts']);
      },
      (error)=>{
        this.errorMessage=error;
      }
    )
  }
}
