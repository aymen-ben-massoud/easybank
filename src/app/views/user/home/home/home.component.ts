import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  Renderer2, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('itemone', [
      transition('void => *', [ 
        style({ opacity: 0 ,
          transform: 'translateX(-100px)'}),           // initial styles
        animate('500ms',
          style({ opacity: 1 ,
            transform: 'translateX(*)' })          // final style after the transition has finished
        )
      ]),
      transition('* => void', [
        animate('500ms', 
          style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
        ) 
      ])
    ]) ,
    trigger('itemtwo', [
      transition('void => *', [ 
        style({ opacity: 0 ,
          transform: 'translateY(-100px)'}),           // initial styles
        animate('500ms',
          style({ opacity: 1 ,
            transform: 'translateY(*)' })          // final style after the transition has finished
        )
      ]),
      transition('* => void', [
        animate('500ms', 
          style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
        ) 
      ])
    ]) 
  ]
,

})
export class HomeComponent {


  

constructor(private renderer2: Renderer2) {}
 ngOnInit(){
  AOS.init();
 


}}
