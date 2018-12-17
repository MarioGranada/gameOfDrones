import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      playerOne: [{ value: '', disabled: false }, Validators.required],
      playerTwo: [{ value: '', disabled: false }, Validators.required]
    });
  }

  submit(): void {
    this.router.navigate([
      '/game',
      this.registerForm.get('playerOne').value.trim(),
      this.registerForm.get('playerTwo').value.trim()
    ]);
  }
}
