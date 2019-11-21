import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts:Post[];
  postSubcription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubcription=this.postService.postsSubject.subscribe(
      (posts:Post[])=>{
        this.posts=posts;
      }
    );
  }
  ngOnDestroy(){
    this.postSubcription.unsubscribe();
  }

}
