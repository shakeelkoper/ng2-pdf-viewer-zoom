import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  zoomVal:number;

  constructor(){
    this.zoomVal=1;
  }

  getZoomLevel(){
    return this.zoomVal;
  }

  zoomIn(){
    this.zoomVal+=0.1;
  }

  zoomOut(){
    this.zoomVal-=0.1;
  }

}
