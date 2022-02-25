import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor() { }
  data=55;

  ngOnInit(): void {
  }

}
