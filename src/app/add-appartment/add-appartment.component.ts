import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.scss']
})
export class AddAppartmentComponent implements OnInit {

  
  constructor (private formBuilderObj:FormBuilder){}

  images:any=[];

  dataOfProperty = this.formBuilderObj.group({
    ownerName:['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email:['', [Validators.pattern("[^@]+@[^@]+\.[a-zA-Z]{2,6}"), Validators.required]],
    moblieNumber:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{1,20}")]],

    description:this.formBuilderObj.group({

        city:['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        area:['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        pincode:['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]{1,10}")]],
        streetName:['',Validators.required],
        hno:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
        bhktype:['', Validators.required],
        detailsofhouse:[''],
        rent:['',[Validators.required,Validators.pattern("[0-9]{1,6}")]],
     
    }),

    file:[''],
    fileSource:['']


  })

 
  submit(){
    
    console.log(this.dataOfProperty.value)
  }


  get ownerName(){
    return this.dataOfProperty.get('ownerName')
  
  }

  
  get email (){
    return this.dataOfProperty.get('email')
  
  }

  get moblieNumber(){
    return this.dataOfProperty.get('moblieNumber')
  
  }

  get city(){
    return this.dataOfProperty.get('description.city')
  
  }

  get area(){
    return this.dataOfProperty.get('description.area')
  
  }
  get streetName(){
    return this.dataOfProperty.get('description.streetName')
  
  }

  get bhktype(){
    return this.dataOfProperty.get('description.bhktype')
  
  }
  

  get pincode(){
    return this.dataOfProperty.get('description.pincode')
  
  }
  
  get hno (){
    return this.dataOfProperty.get('description.hno')
  
  }
  get rent (){
    return this.dataOfProperty.get('description.rent')
  
  }
  


  get f(){

    return this.dataOfProperty.controls;

  }

   

  onFileChange(event:any) {

    if (event.target.files && event.target.files[0]) {

        var filesAmount = event.target.files.length;

        for (let i = 0; i < filesAmount; i++) {

                var reader = new FileReader();
                console.log(reader)

   

                reader.onload = (event:any) => {

                  console.log(event.target.result);

                   this.images.push(event.target.result);

                 this.dataOfProperty.patchValue({
                      fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);

        }

    }

  }


  ngOnInit(): void {
  }

}
