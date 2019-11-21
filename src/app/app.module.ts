import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { PostService } from './services/post.service';
import { PostViewComponent } from './post-view/post-view.component';

const appRoutes: Routes=[
  {path:'auth/signin', component: SignInComponent},
  {path:'auth/signup', component: SignUpComponent},
  {path:'posts', canActivate:[AuthguardService], component: PostViewComponent},
  {path:'posts/new',canActivate:[AuthguardService], component:FormPostComponent},
  {path:'posts/view/:id', canActivate:[AuthguardService],component: SinglePostComponent},
  {path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'**', redirectTo:'posts'}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostListItemComponent,
    SinglePostComponent,
    FormPostComponent,
    SignInComponent,
    SignUpComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthguardService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
