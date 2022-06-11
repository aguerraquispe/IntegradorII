import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }


  buscar(event) {
    console.log(event);
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true
  }
}
