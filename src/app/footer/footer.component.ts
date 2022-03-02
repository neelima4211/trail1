import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  feedBackForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.minLength(6)]]
    })

    formSubmit(){
      console.log(this.feedBackForm.value)
      
    }
}
