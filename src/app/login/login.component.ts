import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  constructor(private userService: UserService,private router: Router) { }

  loginUser() {
    
    const user = { email: this.emailControl.value, password: this.passwordControl.value};
    console.log(user);
    this.userService.loginUser(user).subscribe(
      (response) => {
        console.log(response)
        if(response =="Logging in..Wait")
        console.log('Logging in..', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error logging user:', error);
      }
    );
  }
}