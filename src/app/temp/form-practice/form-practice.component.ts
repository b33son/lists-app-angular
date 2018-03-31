import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {
  email: string = 's';
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription: string = 'Advanced';
  password: string = 'r';

  // ViewChild gives access to the form
  @ViewChild("myForm") signUpForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
