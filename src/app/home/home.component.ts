import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

import { IPost } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allPosts : any= [];

  authorId : number = 0;
  authorPosts : any = []

  constructor(private _crudService : CrudService){}

  ngOnInit(){

    this._crudService.getPosts().subscribe((result) => {
      console.log(result) 
      this.allPosts = result
      console.log(this.allPosts)

      this.getData()

      console.log(this.authorPosts)
    })

    
  }

  getData(){

    this.authorId = JSON.parse(sessionStorage.getItem('id') || '{}')

    this.allPosts.map((post : any) => {
      if(post.authorID === this.authorId){
        console.log(post)
        this.authorPosts.push(post)
      }
    })

  }

}
