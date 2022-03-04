import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  show = false;
  public slides = [
    {id:'00', src: './../../assets/hotelroom_1.webp' ,alt:'',username:'vatsa'},
    {id:'01', src: './../../assets/hotelroom_2.webp' ,alt:'',username:'vatsa'},
    {id:'02', src: './../../assets/hotelroom_3.webp' ,alt:'',username:'vatsa'},
    {id:'1', src: './../../assets/hotelroom_4.webp' ,alt:'nothing1' ,username:'ajith',address:'sec'},
    {id:'2', src: './../../assets/hotelroom_5.webp',alt:'nothing2',username:'bhanu',address:'KPHP'},
    {id:'3', src: './../../assets/hotelroom_6.webp',alt:'nothing3',username:'naveen',address:'hyd'},
    {id:'3', src: './../../assets/hotelroom_7.webp',alt:'nothing3',username:'naveen',address:'hyd'},
    {id:'3', src: './../../assets/hotelroom_8.webp',alt:'nothing3',username:'naveen',address:'hyd'},
    {id:'3', src: './../../assets/hotelroom_9.webp',alt:'nothing3',username:'naveen',address:'hyd'},
    {id:'3', src: './../../assets/hotelroom_10.webp',alt:'nothing3',username:'naveen',address:'hyd'}
  ];

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    margin:20,
    navText: ['<i class="fa fa-light fa-arrow-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
