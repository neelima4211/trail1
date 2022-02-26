import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray,  Validators, NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  ngOnInit(): void {
  }

  
  constructor( private fb:FormBuilder) {}

  signUpform = this.fb.group({
     name: ['', [ Validators.required, Validators.minLength(5)]],
     email: ['',[Validators.required, Validators.pattern("[^@]+@[^@]+\.[a-zA-Z]{2,6}")]],
     phn:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
     psw: ['', [Validators.required, Validators.minLength(5)]],
     
     profile:['',[Validators.required]],
  
     
    
  })

  Submit(){
    console.log(this.signUpform.value)

  }
  
  
  
 

  get name(){
    return this.signUpform.get('name');
  }

  get email(){
    return this.signUpform.get('email');
  }
  get psw() {
    return this.signUpform.get('psw')
  }

  get phn() {
    return this.signUpform.get('phn')
  }

  
  
  get profile(){
    return this.signUpform.get('profile')
  } 
 
 

}
