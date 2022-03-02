import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scss';
  data="55"
  constructor(public fb: FormBuilder) { }

  routes = [
    { path: '/', name: 'Home' },
    { path: 'login', name: 'Login' },
    { path: 'aboutus', name: 'AboutUs' },
    // change this later
    { path: 'login/signup', name: ' new here Sign up' }
  ];

  feedBackForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.minLength(6)]]
    })

    formSubmit(){
      console.log(this.feedBackForm.value)
      
    }

}
