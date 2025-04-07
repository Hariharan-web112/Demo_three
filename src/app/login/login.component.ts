import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

   form: FormGroup;

  ngOnInit() {
      this.form = new FormGroup({
        Email: new FormControl('',Validators.required),
        Password: new FormControl('',Validators.required)
      })
  }

  loginClick() {
    console.log(this.form.value)
    if(true) {
      this.router.navigate(['/homepage']);
    }
  }
}
