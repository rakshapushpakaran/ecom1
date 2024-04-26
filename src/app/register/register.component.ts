import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  full_nameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  usernameControl = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,private router: Router) { }

  registerUser() {
    debugger
    const user = { full_name: this.full_nameControl.value, email: this.emailControl.value, password: this.passwordControl.value, username: this.usernameControl.value};
    
    this.userService.registerUser(user).subscribe(
      (response) => {
        console.log(response)
        if(response =="User registered successfully")
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
}
