import { Component } from '@angular/core';
import { Cat } from './models/cat';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it255-v11';
  public cats!: Cat[];
  constructor(private _catService: CatService) {
    this._catService.getCats().subscribe((data) => {
      this.cats = data;
    })
  }
}
