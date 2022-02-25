import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean=false;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  images = [];
    loginForm = this.fb.group({
        email:['',[Validators.required,Validators.pattern("[^@]+@[^@]+\.[a-zA-Z]{2,6}")]],
        password:['',[Validators.required,Validators.minLength(6)]]
        // file:['', [Validators.required]],
        // fileSource:['', [Validators.required]]
      })
      
    
      // get f(){
      //   return this.loginForm.controls;
      // }
       
      // onFileChange(event) {
      //   if (event.target.files && event.target.files[0]) {
      //       var filesAmount = event.target.files.length;
      //       for (let i = 0; i < filesAmount; i++) {
      //               var reader = new FileReader();
       
      //               reader.onload = (event:any) => {
      //                 console.log(event.target.result);
      //                  this.images.push(event.target.result); 
       
      //                  this.loginForm.patchValue({
      //                     fileSource: this.images
      //                  });
      //               }
      
      //               reader.readAsDataURL(event.target.files[i]);
      //       }
      //   }
      // }
        
      


      formSubmit(){
        this.submitted = true;
        console.log(this.loginForm.value)
        // this.loginForm.reset()
        // this.images=[]
  
      }
}
