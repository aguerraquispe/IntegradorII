import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  mostrarRutasTren() {
    this.loadMap("tren");
  }

  mostrarRutasCorredor() {
    this.loadMap("corredor");
  }

  mostrarRutasMetropolitano() {
    this.loadMap("metropolitano");
  }

  map = null;

  markers_tren: Marker[] = [
    {
      position: {
        lat: -11.9698106,
        lng: -76.9965264,
      },
      title: 'Estacion Santa Rosa'
    },
    {
      position: {
        lat: -12.006081,
        lng: -77.005942,
      },
      title: 'Estacion Los Jardines'
    },
    {
      position: {
        lat: -11.9851094,
        lng: -77.0071339,
      },
      title: 'Estacion San Carlos'
    },
    {
      position: {
        lat: -11.9616676,
        lng: -76.99054,
      },
      title: 'Estacion Bayovar'
    },
    {
      position: {
        lat: -12.027863,
        lng: -77.013407,
      },
      title: 'Estacion Caja De Agua'
    },
  ];

  markers_corredor: Marker[] = [
    {
      position: {
        lat: -11.9698106,
        lng: -76.9965264,
      },
      title: 'Estacion Santa Rosa'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.loadMap("vacio");
  }

  loadMap(movilizacion) {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: -12.006081, lng: -77.005942 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      if (movilizacion == "tren") {
        this.renderMarkers();
      }
      if (movilizacion == "corredor") {
        this.renderMarkersCorredor();
      }
    });
  }

  renderMarkers() {
    this.markers_tren.forEach(marker => {
      this.addMarker(marker);
    });
  }

  renderMarkersCorredor() {
    this.markers_corredor.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
