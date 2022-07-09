import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async ingresar() {
    var registro = this.loginForm;
    var datos = registro.value;

    var info = JSON.parse(localStorage.getItem("usuario"));
    var usuarioKey = info[Object.keys(info)[0]];
    var passwordKey = info[Object.keys(info)[1]];

    var loginuser = datos.usuario;
    var loginpass = datos.password;

    if (usuarioKey == loginuser && passwordKey == loginpass) {
      this.router.navigate(["/tabs/home"]);
    } else {
      const alert = await this.alertController.create({
        header: 'Inicio de sesión fallida',
        message: 'Los campos no estan completados correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
  }
}
