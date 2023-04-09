import { Component } from '@angular/core';

import {ActivatedRoute , Router} from "@angular/router"
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  postId : any;
  post : any;

  constructor(private _route : ActivatedRoute , private _crudservices : CrudService , private _router : Router){}

  ngOnInit(){
    this.postId = this._route.snapshot.params['id']

    this._crudservices.getPostByID(this.postId).subscribe((result) => {
      this.post = result;
    })
  }

  handleDelete(){

    if(sessionStorage.getItem('user') != this.post.author){
      alert("You cannot delete the glboal article")
      return;
    }


    alert("Are you sure you want to delete this article?")

    this._crudservices.deletePostById(this.postId).subscribe((result) => {
      console.log(result)
    })

    this._router.navigate(['/articles'])
  }

}
