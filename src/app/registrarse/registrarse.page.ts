import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  public usuario: string = '';
  public password: string = '';
  public confirmpassword: string = '';
  public registroForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required)
  })


  //formularioRegistro: FormGroup;

  constructor(
    private router: Router,
    public alertController: AlertController
    //public fb: FormBuilder
  ) {
    // this.formularioRegistro = this.fb.group({
    //   'usuario': new FormControl("", Validators.required),
    //   'password': new FormControl("", Validators.required),
    //   'confirmpassword': new FormControl("", Validators.required)
    // });
  }

  ngOnInit() {
  }

  async registrarFormulario() {
    var registro = this.registroForm;
    var datos = registro.value;

    if (registro.invalid) {
      const alert = await this.alertController.create({
        header: 'Registro Fallido',
        message: 'Los campos no estan completados correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    } else {
      var usuario = {
        usuario: datos.usuario,
        password: datos.password
      }

      localStorage.setItem("usuario", JSON.stringify(usuario));

      this.router.navigate(["/login"]);
    }

  }
}
