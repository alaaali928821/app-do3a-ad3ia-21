import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-stary-night',
  templateUrl: './stary-night.component.html',
  styleUrls: ['./stary-night.component.scss']
})
export class StaryNightComponent implements OnInit {

  backgroundColor = "#030318"
  width = window.innerWidth;
  height = window.innerHeight;
  ctx : any;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  
  constructor() { 

    //https://kaeruct.github.io/posts/starry-sky-in-html5-canvas-pt1.html
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
    this.render()
  }
  ngOnInit(): void {

    
  }

  render(){
    this.ctx.fillStyle =this.backgroundColor;
    this.ctx.fillRect(0,0,this.width,this.height)
  }

}
