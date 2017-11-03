import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registrationForm = this.fb.group({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    });
  }

  ngOnInit() {
  }

}
