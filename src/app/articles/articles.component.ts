import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  posts : any[] = [];

  constructor(private _crudservices : CrudService){}

  ngOnInit(){
    this._crudservices.getPosts().subscribe((result) => {
      this.posts = result;
    })
  }

}
