import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostService {
  posts: Post[]=[];
  postsSubject= new Subject<Post[]>();


  emitPost(){
    this.postsSubject.next(this.posts);
  }

  //on click love posts
  onClickLove(index: number){
    this.posts[index].loveIts++;
  }
  //On click dont love posts
  onClickDontLost(index: number){
    this.posts[index].loveIts--;
  }

  //save posts to firebase
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }
  //remove post from array and firebase
  removePost(post:Post){
    const postIndexToRemove=this.posts.findIndex(
      (postIndex)=>{
        if(postIndex===post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitPost();
  }
  //get the posts from firebase
  getPosts(){
    firebase.database().ref('/posts').on('value',
      (data)=>{
        this.posts=data.val()?data.val():[];
        this.emitPost();
      }
    );
  }
  //Get one post
  getPostById(id: number){
    return new Promise(
      (resolve, reject)=>{
        firebase.database().ref('/posts/'+id).once('value',
          (data)=>{
            resolve(data.val());
          },
          (error)=>{
            console.log("Error while retrieving data: "+error);
              reject(error);
          }
        );
      }
    );
  }
  //add posts to the array
  addPosts(post: Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPost();
  }
  //get the last id of posts
  getLastId(){
    if(this.posts.length===0){
      return 0;
    }else{
      return this.posts[this.posts.length-1].id;
    }
  }
  
}
