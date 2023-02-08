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
  test = '';
 constructor(){
  console.log('testconstructor'); 
 }
  submit(myform: NgForm){
    console.log('hihiSUBMITFormhihi');
    alert('hihiSUBMITFormhihi');
    console.log('myform', this.myForm)
    console.log('emailcos', this.emailcos)
  }
  resetForm(myForm: NgForm){
    console.log('hihiresetFormhihi');
    alert('hihiresetFormhihi');
    myForm.reset();
    myForm.value.emailcontrol = 'lll';
    console.log(myForm.value)
  }
}
