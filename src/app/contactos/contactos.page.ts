import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  constructor(
   // private formBuilder: FormBuilder
  ) { }

  // contactoMensaje = this.formBuilder.group({
  //   asunto: ['' , Validators.required],
  //   mensaje: ['', Validators.required]
  // })

  ngOnInit() {
  }

  enviado(){
    alert("Mensaje enviado correctamente");
  }
}
