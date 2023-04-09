import { Component } from '@angular/core';

import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { CrudService } from '../services/crud.service';
import {Router} from "@angular/router";
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  createForm : FormGroup;
  submitted : boolean = false;
  userId : number = 0;
  authorName : any;

   postDetails : any= {
    title : "",
    author : "",
    image : "",
    blog : ""
  }

  constructor(private _formbuilder : FormBuilder , private _crudservice : CrudService , private _router : Router , private _accountService : AccountServiceService){
    this.createForm = this._formbuilder.group({
      title : ['' , Validators.required],
      author : ['' , Validators.required],
      image : ['' , Validators.required],
      blog : ['' , Validators.required]
    })

  }

  ngOnInit(){
    this.userId = JSON.parse(sessionStorage.getItem('id') || '{}')
    this.authorName = sessionStorage.getItem('name')
    this.postDetails.author = this.authorName

    console.log(this.userId)
  }

  get f(){
    return this.createForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.createForm.invalid){
      return
    }

    this._crudservice.createPost({
      "title" : this.postDetails.title,
      "author" : this.postDetails.author,
      "image" : this.postDetails.image,
      "blog" : this.postDetails.blog,
      "authorID" : this.userId
    }).subscribe((result) => {
      console.log(result)
    })

    alert("Created a new blog post")

    this._router.navigate(['/articles'])
  }

}
