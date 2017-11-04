import { ValidationService } from './../../services/validation-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      first: ['', [Validators.required, ValidationService.nameValidator]],
      last: ['', [Validators.required, ValidationService.nameValidator]],
      username: ['', [Validators.required, ValidationService.usernameValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, ValidationService.emailValidator]]
    });
  }

  ngOnInit() {
  }
}
