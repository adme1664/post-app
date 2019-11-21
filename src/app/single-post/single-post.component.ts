import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;
  constructor(private postService: PostService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id=this.activeRoute.snapshot.params['id'];
    console.log("Id"+id);
    this.postService.getPostById(+id).then(
      (post: Post)=>{
        this.post=post;
      }
    );
  }

}
