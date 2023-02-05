import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.less']
})
export class TemplateformComponent {
  @ViewChild('myForm') myForm!:NgForm;
  @ViewChild('emailco') emailcos:any;
  emailcontrol: string = '';
 
  submit(myform: NgForm){
    console.log('myform', this.myForm)
    console.log('emailcos', this.emailcos)
  }
  resetForm(myForm: NgForm){
    myForm.reset();
    myForm.value.emailcontrol = 'lll';
    console.log(myForm.value)
  }
}
