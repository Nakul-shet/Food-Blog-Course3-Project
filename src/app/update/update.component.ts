import { Component } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router"
import { CrudService } from '../services/crud.service';

import {FormGroup , FormBuilder, Validators} from "@angular/forms"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  postID : any;
  post : any;
  userId : any;
  authorName : any;

  postContent : any = {
    title : "",
    author : "",
    image : "",
    blog : ""
  }

  createForm : FormGroup;
  submitted : boolean = false;


  constructor(private _route : ActivatedRoute , private _crudservice : CrudService , private _formbuilder : FormBuilder ,private _router : Router){
    this.createForm = this._formbuilder.group({
      title : ['' , Validators.required],
      author : ['' , Validators.required],
      image : ['' , Validators.required],
      blog : ['' , Validators.required]
    })
  }

  ngOnInit(){

    this.userId = sessionStorage.getItem('id')
    this.authorName = sessionStorage.getItem('user')
    this.postContent.author = this.authorName

    this.postID = this._route.snapshot.params['id']

    this._crudservice.getPostByID(this.postID).subscribe((result) => {
      this.post = result;

      this.postContent.title = this.post.title;
      this.postContent.author = this.post.author;
      this.postContent.image = this.post.image;
      this.postContent.blog = this.post.blog;

    })
  }

  get f(){
    return this.createForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.createForm.invalid){
      return
    }

    this._crudservice.updatePostById(this.postID , {
        "title" : this.postContent.title,
        "author" : this.postContent.author,
        "image" : this.postContent.image,
        "blog" : this.postContent.blog,
        "authorID" : this.userId
    }).subscribe((result) => {
         console.log(result)
    })

    alert("Updated Successfully")

    this._router.navigate(['/articles'])
  }

}
