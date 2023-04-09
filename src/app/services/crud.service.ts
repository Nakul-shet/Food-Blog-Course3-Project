import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import { IPost } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _http : HttpClient) { }

  createPost(post : IPost) : Observable<IPost>{
      return this._http.post<IPost>('http://localhost:3001/blogposts' , post)
  }

  getPosts() : Observable<IPost[]>{
    return this._http.get<IPost[]>('http://localhost:3001/blogposts')
  }

  getPostByID(postId : number) : Observable<IPost>{
    return this._http.get<IPost>(`http://localhost:3001/blogposts/${postId}`)
  }

  updatePostById(postId : any , post : IPost) : Observable<IPost>{
    return this._http.put<IPost>(`http://localhost:3001/blogposts/${postId}` , post)
  }

  deletePostById(postId : any){
    return this._http.delete(`http://localhost:3001/blogposts/${postId}`)
  }
}
