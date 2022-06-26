import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  public post!: Post;

  constructor(private _route: ActivatedRoute, private _postService: PostService) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getPost(id);
    })
  }

  public getPost(id: number) {
    this._postService.getPost(id).subscribe((data) => {
      this.post = data;
    });
  }

}
