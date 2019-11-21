import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor(private postService : PostService,
    private router: Router) { }

ngOnInit() {

}
@Input() title: string;
@Input() contents: string;
@Input() loveIts: number;
@Input() created_at: Date;
@Input() indexOfPost: number;
@Input() id:number;

onPostItemLoveIt(){
this.postService.onClickLove(this.indexOfPost);
}
onPostItemDontLoveIt(){
this.postService.onClickDontLost(this.indexOfPost);
}
onPostItemDelete(){
const post=this.postService.posts[this.indexOfPost];
this.postService.removePost(post);
}
onViewPost(){
this.router.navigate(['/posts','view',this.indexOfPost]);
}

}
