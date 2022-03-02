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
  
  constructor( private fb:FormBuilder) { 

  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

signUpform = this.fb.group({
     name: ['', [ Validators.required, Validators.minLength(5)]],
     email: ['',[Validators.required, Validators.pattern("[^@]+@[^@]+\.[a-zA-Z]{2,6}")]],
     phn:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
     psw: ['', [Validators.required, Validators.minLength(5)]],
     profile:['',[Validators.required]],
     //  password validation
      // confirm_password: ['', [Validators.required]]
  // },
  // {
  // validator: this.ConfirmedValidator('psw', 'confirm_password')
      })

  Submit(){
    console.log(this.signUpform.value)

  }

  // for form validation 
  // get f(){
  //   return this.signUpform.controls;
  // }
   
  
  
  
 

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
