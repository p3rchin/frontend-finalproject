import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {
  userLogin: UserLogin = {
    email: "",
    password: ""
  }

  form = this.formBuilder.nonNullable.group({
    emailAddress: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }
  );
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {

  }

  @Input() titleLogin: string = "";
  @Input() type: boolean = false;


  loginUser() {
    console.log(this.form)
    if (this.form.valid) {
      const {
        emailAddress, password
      } = this.form.getRawValue();
      this.userLogin = {
        ... this.userLogin,
        email: emailAddress,
        password: password
      }
      console.log(this.userLogin)
      this.userService.loginUser(this.userLogin).subscribe({
        next: (data) => {
          if (data.data) {
            this.router.navigate(['student/option'])
          } else {
            alert("Inicio de sesión fallido. Revisa las credenciales que digitaste.");
          }
        }
        ,
        error: (error) => {

        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
