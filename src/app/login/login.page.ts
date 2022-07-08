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

    if (registro.invalid) {
      const alert = await this.alertController.create({
        header: 'Inicio de sesión fallida',
        message: 'Los campos no estan completados correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    } else {
      this.router.navigate(["/tabs/home"]);
    }
  }
}
