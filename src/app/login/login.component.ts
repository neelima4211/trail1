import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean=false;
  fileName: string;
  
  loginForm: FormGroup = new FormGroup({});
  
  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
      // file:['', [Validators.required]],
      // fileSource:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  images = [];
  // for angular material form
  hide = true;

    
      
    
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



      onFileSelected(event) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            // const upload$ = this.http.post("/api/thumbnail-upload", formData);

            // upload$.subscribe();
        }
    }
}
