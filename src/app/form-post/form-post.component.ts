import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  postForm: FormGroup;
  post: Post;
  constructor(private postService: PostService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm=this.formBuilder.group(
      {
        title:['',Validators.required],
        contents:['',Validators.required]
      }
    );
  }
  onCreateForm(){
    const title=this.postForm.get('title').value;
    const contents=this.postForm.get('contents').value;
    const dateCreate=new Date().toLocaleDateString();
    this.post=new Post(title,contents,0,this.postService.getLastId()+1,dateCreate);
    this.postService.addPosts(this.post);
    this.postService.emitPost();
    this.router.navigate(['/posts']);
  }

}
