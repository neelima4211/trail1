import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent   {

constructor() {
}


  show = false;

  
  public slides = [
    { id:'1',src: 'https://wallpaperaccess.com/full/13189.jpg' ,alt:'nothing1'},
    {  id:'2',src: 'https://wallpapercave.com/wp/wp2587127.jpg',alt:'nothing2'},
    {  id:'3',src: 'https://wallpaperaccess.com/full/13189.jpg',alt:'nothing3'}
  ];
  
  
}
