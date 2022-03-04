import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  posts = [];
  currentUser=''
  id:any =''
  favoritePosts='';
  likestatus : boolean = false ;

  constructor(private router: Router) {
   
    }
  }
