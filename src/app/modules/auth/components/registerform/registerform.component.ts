import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCreate } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent {
  user: UserCreate = {
    id: 0,
    nombre: "",
    apellido: "",
    telefono: "",
    id_tipo_identificacion: 0,
    numero_identificacion: "",
    id_rol: 0,
    email: "",
    direccion: "",
    password: ""
  }
  form = this.formBuilder.nonNullable.group({
    emailAddress: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repitePassword: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    secondName: ['', [Validators.required]],
    firstLastname: ['', [Validators.required]],
    secondLastname: ['', [Validators.required]],
    documentType: ['', [Validators.required]],
    documentNumber: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    address: ['', [Validators.required]],
  }
  );
  constructor(private formBuilder: FormBuilder, private userService: UserService) {

  }

  saveUser() {
    console.log(this.form)
    if (this.form.valid) {
      const {
        emailAddress, password, firstName, secondName, firstLastname, secondLastname,
        documentType, documentNumber, phoneNumber, address
      } = this.form.getRawValue();
      this.user = {
        ... this.user,
        nombre: firstName + " " + secondName,
        apellido: firstLastname + " " + secondLastname,
        telefono: phoneNumber,
        id_tipo_identificacion: Number(documentType),
        numero_identificacion: documentNumber,
        id_rol: 1,
        email: emailAddress,
        direccion: address,
        password: password
      }
      console.log(this.user)
      this.userService.registerUser(this.user).subscribe({
        next: (data)=> {

        }
        ,
        error: (error)=> {

        }
      })
    }
  }

}
