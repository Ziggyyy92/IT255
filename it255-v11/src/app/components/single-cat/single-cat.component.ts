import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-single-cat',
  templateUrl: './single-cat.component.html',
  styleUrls: ['./single-cat.component.css']
})
export class SingleCatComponent implements OnInit {

  @Input() cat!: Cat;
  constructor() { }

  ngOnInit(): void {
  }

}
