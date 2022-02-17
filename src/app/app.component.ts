import { Component, SimpleChange } from '@angular/core';
import { DIService } from './di.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  message: String = "";

  constructor(private service : DIService){}

  ngOnInit() : void{
    this.message = this.service.titleModifier();
    console.log(this.message)
  }
}
