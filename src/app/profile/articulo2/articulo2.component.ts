import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo2',
  templateUrl: './articulo2.component.html',
  styleUrls: ['./articulo2.component.css']
})
export class Articulo2Component implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
