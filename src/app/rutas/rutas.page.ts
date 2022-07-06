import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
  district?: string;
  ubication?: string;
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
      position:
      {
        lat: -12.2072911334699,
        lng: -76.9336067140102
      },
      title: 'Estacion Villa El Salvador',
      district: 'Villa El Salvador',
      ubication: 'Av. Separadora Industrial / Av. Velasco Alvarado'
    }, {
      position:
      {
        lat: -12.1965110529596,
        lng: -76.9394432008266
      },
      title: 'Estacion Parque Industrial',
      district: 'Villa El Salvador',
      ubication: 'Av. Separadora Industrial / Av. El Sol'
    }, {
      position:
      {
        lat: -12.1823248267077,
        lng: -76.9468849897384
      },
      title: 'Estacion Pumacahua',
      district: 'VM del Triunfo',
      ubication: 'Av. La Unión / Pedro Ruiz Gallo / E. Aguirre'
    }, {
      position:
      {
        lat: -12.1692901860067,
        lng: -76.9503504037857
      },
      title: 'Estacion Villa María',
      district: 'VM del Triunfo',
      ubication: 'Av. Pachacútec / Av. Santa Rosa'
    }, {
      position:
      {
        lat: -12.1611908987219,
        lng: -76.9563344120979
      },
      title: 'Estacion María Auxiliadora',
      district: 'VM del Triunfo',
      ubication: 'Av. Pachacútec / Av. Manco Cápac'
    }, {
      position:
      {
        lat: -12.1565026909025,
        lng: -76.9656845927238
      },
      title: 'Estacion San Juan',
      district: 'SJ de Miraflores',
      ubication: 'Los Héroes / Av. César Canevaro'
    }, {
      position:
      {
        lat: -12.1508520845247,
        lng: -76.9795355200767
      },
      title: 'Estacion Atocongo',
      district: 'SJ de Miraflores',
      ubication: 'Av. Los Héroes / Av. Buckingham'
    }, {
      position:
      {
        lat: -12.1425372153981,
        lng: -76.9909885525703
      },
      title: 'Estacion Jorge Chávez',
      district: 'Santiago de Surco',
      ubication: 'Av. Tomás Marsano / Av. Jorge Chávez'
    }, {
      position:
      {
        lat: -12.1347544095001,
        lng: -76.9970154762268
      },
      title: 'Estacion Ayacucho',
      district: 'Santiago de Surco',
      ubication: 'Av. Tomás Marsano / Av. Ayacucho'
    }, {
      position:
      {
        lat: -12.1276872779799,
        lng: -77.0006257295608
      },
      title: 'Estacion Cabitos',
      district: 'Santiago de Surco',
      ubication: 'Av. Aviación / Óvalo Los Cabitos (Higuereta)'
    }, {
      position:
      {
        lat: -12.1110846823968,
        lng: -77.0002743601799
      },
      title: 'Estacion Angamos',
      district: 'San Borja',
      ubication: 'Av. Aviación / Av. Primavera'
    }, {
      position:
      {
        lat: -12.1009681577483,
        lng: -77.0016919076442
      },
      title: 'Estacion San Borja Sur',
      district: 'San Borja',
      ubication: 'Av. Aviación / Av. San Borja Sur'
    }, {
      position:
      {
        lat: -12.0874797367649,
        lng: -77.003678753972
      },
      title: 'Estacion La Cultura',
      district: 'San Borja',
      ubication: 'Av. Aviación / Av. Javier Prado'
    }, {
      position:
      {
        lat: -12.0775406721159,
        lng: -77.0106410980224
      },
      title: 'Estacion Arriola',
      district: 'La Victoria',
      ubication: 'Av. Aviación / Óvalo Arriola'
    }, {
      position:
      {
        lat: -12.0651369783503,
        lng: -77.0124113559722
      },
      title: 'Estacion Gamarra',
      district: 'La Victoria',
      ubication: 'Av. Aviación / Jirón Hipólito Unanue'
    }, {
      position:
      {
        lat: -12.0564876261454,
        lng: -77.0143365114927
      },
      title: 'Estacion Grau',
      district: 'Cercado de Lima',
      ubication: 'Av. Grau / Nicolás Ayllón'
    }, {
      position:
      {
        lat: -12.0462158,
        lng: -77.009676
      },
      title: 'Estacion El Ángel',
      district: 'El Agustino',
      ubication: 'Av. Locumba Nro. S/N (Cementerio el Ángel)'
    }, {
      position:
      {
        lat: -12.0416683,
        lng: -77.0124116
      },
      title: 'Estacion Presbítero Maestro',
      district: 'El Agustino',
      ubication: 'Av. Locumba Nro. S/N (Cementerio Presbítero Maestro)'
    }, {
      position:
      {
        lat: -12.0280274,
        lng: -77.0114031
      },
      title: 'Estacion Caja de Agua',
      district: 'San Juan de Lurigancho',
      ubication: 'AV. Próceres de la Independencia / Óvalo Zárate'
    }, {
      position:
      {
        lat: -12.018153,
        lng: -77.0028844
      },
      title: 'Estacion Pirámides del Sol',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Pirámides del Sol'
    }, {
      position:
      {
        lat: -12.0065782,
        lng: -77.0062425
      },
      title: 'Estacion Los Jardines',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Los Jardines'
    }, {
      position:
      {
        lat: -11.9979038,
        lng: -77.0096896
      },
      title: 'Estacion Los Postes',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Los Postes'
    }, {
      position:
      {
        lat: -11.9851938,
        lng: -77.0065139
      },
      title: 'Estacion San Carlos',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. El Sol'
    }, {
      position:
      {
        lat: -11.9749367,
        lng: -76.9999081
      },
      title: 'Estacion San Martín',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Canto Rey'
    }, {
      position:
      {
        lat: -11.9682363,
        lng: -76.9934924
      },
      title: 'Estacion Santa Rosa',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Santa Rosa'
    }, {
      position:
      {
        lat: -11.9598812,
        lng: -76.9871422
      },
      title: 'Estacion Bayóvar',
      district: 'San Juan de Lurigancho',
      ubication: 'Av. Próceres de la Independencia / Av. Bayóvar'
    }
  ];

  markers_metropolitano: Marker[] = [
    {
      position:
      {
        lng: -77.0605502746262,
        lat: -11.9764442105681,
      },
      title: 'Estación Naranjal',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Chinchaysuyo y Av. Los Alisos'
    },
    {
      position:
      {
        lng: -77.0570100957111,
        lat: -11.989577505083,
      },
      title: 'Estación Izaguirre',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Izaguirre'
    },
    {
      position:
      {
        lng: -77.0559848248548,
        lat: -11.994782422811,
      },
      title: 'Estación Pacífico',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Pacífico'
    },
    {
      position:
      {
        lng: -77.0552857405127,
        lat: -11.9983903773359,
      },
      title: 'Estación Independencia',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Los Pinos'
    },
    {
      position:
      {
        lng: -77.054759373596,
        lat: -12.0018634196795,
      },
      title: 'Estación Los Jazmines',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Los Jazmines'
    },
    {
      position:
      {
        lng: -77.0540341025452,
        lat: -12.0060456741794,
      },
      title: 'Estación Tomás Valle',
      district: 'Independencia',
      ubication: 'Av. Túpac Amaru con Av. Tomás Valle'
    },
    {
      position:
      {
        lng: -77.0529023471182,
        lat: -12.0115900297117,
      },
      title: 'Estación El Milagro',
      district: 'Rímac y San Martín de Porres',
      ubication: 'Av. Túpac Amaru con Av. Fray Bartolomé de las Casas'
    },
    {
      position:
      {
        lng: -77.0514770669227,
        lat: -12.0174590722727,
      },
      title: 'Estación Honorio Delgado',
      district: 'Rímac y San Martín de Porres',
      ubication: 'Av. Túpac Amaru con Av. Honorio Delgado'
    },
    {
      position:
      {
        lng: -77.0488385091822,
        lat: -12.024092280904,
      },
      title: 'Estación UNI',
      district: 'Rímac y San Martín de Porres',
      ubication: 'Av. Túpac Amaru con Av. Eduardo de Habich'
    },
    {
      position:
      {
        lng: -77.0442507248184,
        lat: -12.0294724832744,
      },
      title: 'Estación Parque del Trabajo',
      district: 'Rímac y San Martín de Porres',
      ubication: 'Av. Caquetá con Av. Miguel Grau'
    },
    {
      position:
      {
        lng: -77.0436573958706,
        lat: -12.0362641322682,
      },
      title: 'Estación Caquetá',
      district: 'Rímac y San Martín de Porres',
      ubication: 'Av. Caquetá con Vía de Evitamiento'
    },
    {
      position:
      {
        lng: -77.0427162247015,
        lat: -12.0471047288257,
      },
      title: 'Estación 2 de Mayo',
      district: 'Lima',
      ubication: 'Av. Alfonso Ugarte con Plaza 2 de Mayo'
    },
    {
      position:
      {
        lng: -77.0423039327986,
        lat: -12.0517676579002,
      },
      title: 'Estación Quilca',
      district: 'Lima y Breña',
      ubication: 'Av. Alfonso Ugarte con Jirón Quilca'
    },
    {
      position:
      {
        lng: -77.0418029671215,
        lat: -12.057026655326,
      },
      title: 'Estación España',
      district: 'Lima y Breña',
      ubication: 'Av. Alfonso Ugarte con Av. España'
    },
    {
      position:
      {
        lng: -77.0413798957936,
        lat: -12.0439814277389,
      },
      title: 'Estación Ramón Castilla',
      district: 'Lima',
      ubication: 'Av. Emancipación con Plaza Ramón Castilla'
    },
    {
      position:
      {
        lng: -77.0371215378959,
        lat: -12.0464883209772,
      },
      title: 'Estación Tacna',
      district: 'Lima',
      ubication: 'Av. Emancipación con Av. Tacna'
    },
    {
      position:
      {
        lng: -77.0329376670813,
        lat: -12.0490680980746,
      },
      title: 'Estación Jirón de la Unión',
      district: 'Lima',
      ubication: 'Av. Emancipación con Jirón de la Unión'
    },
    {
      position:
      {
        lng: -77.0328044669645,
        lat: -12.0522044379387,
      },
      title: 'Estación Colmena',
      district: 'Lima',
      ubication: 'Jirón Lampa con Av. Nicolás de Piérola'
    },
    {
      position:
      {
        lng: -77.0359747602862,
        lat: -12.057634686099,
      },
      title: 'Estación Estación Central',
      district: 'Lima',
      ubication: 'Paseo de los Héroes Navales'
    },
    {
      position:
      {
        lng: -77.0318714537277,
        lat: -12.0691341984506,
      },
      title: 'Estación Estadio Nacional',
      district: 'Lima y La Victoria',
      ubication: 'Av. Paseo de la República con Jirón Sebastián Barranca'
    },
    {
      position:
      {
        lng: -77.0289395449291,
        lat: -12.0765126722777,
      },
      title: 'Estación México',
      district: 'Lima y La Victoria',
      ubication: 'Av. Paseo de la República con Av. México'
    },
    {
      position:
      {
        lng: -77.0266603672424,
        lat: -12.0821091295713,
      },
      title: 'Estación Canadá',
      district: 'Lince y La Victoria',
      ubication: 'Av. Paseo de la República con Av. Canadá'
    },
    {
      position:
      {
        lng: -77.0228856959139,
        lat: -12.090481006429,
      },
      title: 'Estación Javier Prado',
      district: 'Lince y La Victoria',
      ubication: 'Av. Paseo de la República con Av. Javier Prado'
    },
    {
      position:
      {
        lng: -77.0251380539605,
        lat: -12.0968170371655,
      },
      title: 'Estación Canaval y Moreyra / Andrés Reyes',
      district: 'San Isidro',
      ubication: 'Av. Paseo de la República con Av. Canaval y Moreyra'
    },
    {
      position:
      {
        lng: -77.0271921512455,
        lat: -12.1021987461073,
      },
      title: 'Estación Aramburú',
      district: 'San Isidro, Miraflores y Surquillo',
      ubication: 'Av. Paseo de la República con Av. Aramburú'
    },
    {
      position:
      {
        lng: -77.0264273668488,
        lat: -12.1084191935303,
      },
      title: 'Estación Domingo Orué',
      district: 'Miraflores y Surquillo',
      ubication: 'Av. Paseo de la República con Av. Domingo Orué'
    },
    {
      position:
      {
        lng: -77.0251798313833,
        lat: -12.1132214050545,
      },
      title: 'Estación Angamos',
      district: 'Miraflores y Surquillo',
      ubication: 'Av. Paseo de la República con Av. Angamos'
    },
    {
      position:
      {
        lng: -77.0259314314236,
        lat: -12.1188767621206,
      },
      title: 'Estación Ricardo Palma',
      district: 'Miraflores y Surquillo',
      ubication: 'Av. Paseo de la República con Av. Ricardo Palma'
    },
    {
      position:
      {
        lng: -77.0242946893945,
        lat: -12.1246937853491,
      },
      title: 'Estación Benavides',
      district: 'Miraflores',
      ubication: 'Av. Paseo de la República con Av. Benavides'
    },
    {
      position:
      {
        lng: -77.0228056022753,
        lat: -12.1293459338631,
      },
      title: 'Estación 28 de Julio',
      district: 'Miraflores',
      ubication: 'Av. Paseo de la República con Av. 28 de Julio'
    },
    {
      position:
      {
        lng: -77.018642480199,
        lat: -12.1355922124507,
      },
      title: 'Estación Plaza de Flores',
      district: 'Barranco',
      ubication: 'Av. Paseo de la República con Av. República de Panamá'
    },
    {
      position:
      {
        lng: -77.0177476600957,
        lat: -12.1410922369099,
      },
      title: 'Estación Balta',
      district: 'Barranco',
      ubication: 'Av. República de Panamá con Av. Balta'
    },
    {
      position:
      {
        lng: -77.0202607422372,
        lat: -12.1480126324165,
      },
      title: 'Estación Bulevar',
      district: 'Barranco',
      ubication: 'Av. Francisco Bolognesi con Calle Pazos'
    },
    {
      position:
      {
        lng: -77.019698102477,
        lat: -12.1527725185691,
      },
      title: 'Estación Estadio Unión',
      district: 'Barranco',
      ubication: 'Av. Escuela Militar con Calle Deportes'
    },
    {
      position:
      {
        lng: -77.0188806735287,
        lat: -12.1593851648433,
      },
      title: 'Estación Escuela Militar',
      district: 'Chorrillos',
      ubication: 'Av. Escuela Militar con Villa Militar'
    },
    {
      position:
      {
        lng: -77.0187535024375,
        lat: -12.1682661678108,
      },
      title: 'Estación Fernando Terán',
      district: 'Chorrillos',
      ubication: 'Prolongación Paseo de la República con Av. Fernando Terán'
    },
    {
      position:
      {
        lng: -77.0154430882504,
        lat: -12.172529005731,
      },
      title: 'Estación Rosario de Villa',
      district: 'Chorrillos',
      ubication: 'Prolongación Paseo de la República con Calle Madalengoitia'
    },
    {
      position:
      {
        lng: -77.0095055737309,
        lat: -12.1793167528948,
      },
      title: 'Estación Matellini',
      district: 'Chorrillos',
      ubication: 'Prolongación Paseo de la República con Av. Matellini'
    }
  ];

  markers_corredor: Marker[] = [
    {
      position:
      {
        lng: -77.0375194,
        lat: -12.0466889
      },
      title: 'Estación EMANCIPACION',
    },
    {
      position:
      {
        lng: -77.0381889,
        lat: -12.0546
      },
      title: 'Estación URUGUAY',

    },
    {
      position:
      {
        lng: -77.0233194,
        lat: -12.1328806
      },
      title: 'Estación LAS ACACIAS / REDUCTO',

    },
    {
      position:
      {
        lng: -77.0354694,
        lat: -12.0770389
      },
      title: 'Estación E. VILLAR',

    },
    {
      position:
      {
        lng: -77.0297306,
        lat: -12.0351611
      },
      title: 'Estación G. REPUBLICANA',

    },
    {
      position:
      {
        lng: -77.0349194,
        lat: -12.0804194
      },
      title: 'Estación M. SEGURA 306',

    },
    {
      position:
      {
        lng: -77.0296611,
        lat: -12.0213889
      },
      title: 'Estación EL SOL',

    },
    {
      position:
      {
        lng: -77.0323306,
        lat: -12.0391611
      },
      title: 'Estación PIZARRO',

    },
    {
      position:
      {
        lng: -77.0377694,
        lat: -12.059
      },
      title: 'Estación ESPAÑA 303',

    },
    {
      position:
      {
        lng: -77.0363806,
        lat: -12.0450806
      },
      title: 'Estación ICA  ',

    },
    {
      position:
      {
        lng: -77.0378306,
        lat: -12.05875
      },
      title: 'Estación ESPAÑA',

    },
    {
      position:
      {
        lng: -77.0344694,
        lat: -12.0093
      },
      title: 'Estación PASAJE 17 ',

    },
    {
      position:
      {
        lng: -77.0297889,
        lat: -12.11325
      },
      title: 'Estación ANGAMOS 303',

    },
    {
      position:
      {
        lng: -77.0331702,
        lat: -12.0253314
      },
      title: 'Estación AMANCAES',

    },
    {
      position:
      {
        lng: -77.0329111,
        lat: -12.0395194
      },
      title: 'Estación VIRU ',

    },
    {
      position:
      {
        lng: -77.0338111,
        lat: -12.0264111
      },
      title: 'Estación AMANCAES',

    },
    {
      position:
      {
        lng: -77.0297,
        lat: -12.1140389
      },
      title: 'Estación ANGAMOS',

    },
    {
      position:
      {
        lng: -77.0294889,
        lat: -12.1273111
      },
      title: 'Estación 28 DE JULIO',

    },
    {
      position:
      {
        lng: -77.0312389,
        lat: -12.0139111
      },
      title: 'Estación CLAVELES',

    },
    {
      position:
      {
        lng: -77.0385611,
        lat: -12.0530306
      },
      title: 'Estación VILLARAN',

    },
    {
      position:
      {
        lng: -77.0175611,
        lat: -12.1389
      },
      title: 'Estación AV. EL SOL',

    },
    {
      position:
      {
        lng: -77.0283694,
        lat: -12.0188611
      },
      title: 'Estación CALLE 10',

    },
    {
      position:
      {
        lng: -77.03005,
        lat: -12.1119889
      },
      title: 'Estación AYACUCHO',

    },
    {
      position:
      {
        lng: -77.0314194,
        lat: -12.1038889
      },
      title: 'Estación ARAMBURU',

    },
    {
      position:
      {
        lng: -77.0258,
        lat: -12.1346194
      },
      title: 'Estación ARMENDARIZ / ACACIAS',

    },
    {
      position:
      {
        lng: -77.0196111,
        lat: -12.0279611
      },
      title: 'Estación TUNEL',

    },
    {
      position:
      {
        lng: -77.0380694,
        lat: -12.0563389
      },
      title: 'Estación BOLIVIA',

    },
    {
      position:
      {
        lng: -77.0301611,
        lat: -12.0164
      },
      title: 'Estación 24 DE JUNIO',

    },
    {
      position:
      {
        lng: -77.0326694,
        lat: -12.0116
      },
      title: 'Estación CEREZOS ',

    },
    {
      position:
      {
        lng: -77.0224806,
        lat: -12.1373889
      },
      title: 'Estación CHIPOCO',

    },
    {
      position:
      {
        lng: -77.0305111,
        lat: -12.1091806
      },
      title: 'Estación CARLOS TENAUD',

    },
    {
      position:
      {
        lng: -77.0325111,
        lat: -12.0116694
      },
      title: 'Estación CEREZOS ',

    },
    {
      position:
      {
        lng: -77.038,
        lat: -12.0570194
      },
      title: 'Estación BOLIVIA 303',

    },
    {
      position:
      {
        lng: -77.0226389,
        lat: -12.1375889
      },
      title: 'Estación CHIPOCO',

    },
    {
      position:
      {
        lng: -77.0359194,
        lat: -12.07365
      },
      title: 'Estación E. FERNANDEZ',

    },
    {
      position:
      {
        lng: -77.0335389,
        lat: -12.0899611
      },
      title: 'Estación D. CASANOVA',

    },
    {
      position:
      {
        lng: -77.0354694,
        lat: -12.0770389
      },
      title: 'Estación E. VILLAR',

    },
    {
      position:
      {
        lng: -77.0360611,
        lat: -12.0742694
      },
      title: 'Estación CUBA ',

    },
    {
      position:
      {
        lng: -77.0359111,
        lat: -12.0439111
      },
      title: 'Estación HUANCAVELICA',

    },
    {
      position:
      {
        lng: -77.0309306,
        lat: -12.0370111
      },
      title: 'Estación CHIRA',

    },
    {
      position:
      {
        lng: -77.0382,
        lat: -12.0575
      },
      title: 'Estación ESPAÑA',

    },
    {
      position:
      {
        lng: -77.0348611,
        lat: -12.0822
      },
      title: 'Estación M. CANDAMO',

    },
    {
      position:
      {
        lng: -77.0284611,
        lat: -12.0326
      },
      title: 'Estación LEONCIO PRADO',

    },
    {
      position:
      {
        lng: -77.0387111,
        lat: -12.0517611
      },
      title: 'Estación ILO  ',

    },
    {
      position:
      {
        lng: -77.03135,
        lat: -12.0138
      },
      title: 'Estación CLAVELES',

    },
    {
      position:
      {
        lng: -77.0295694,
        lat: -12.0210306
      },
      title: 'Estación C. VALDERRAMA',

    },
    {
      position:
      {
        lng: -77.0324194,
        lat: -12.0992611
      },
      title: 'Estación CHOQUEHUANCA',

    },
    {
      position:
      {
        lng: -77.0309,
        lat: -12.0364306
      },
      title: 'Estación CHIRA',

    },
    {
      position:
      {
        lng: -77.0357306,
        lat: -12.0764806
      },
      title: 'Estación E. VILLAR',

    },
    {
      position:
      {
        lng: -77.0325111,
        lat: -12.0278694
      },
      title: 'Estación LA COLONIA',

    },
    {
      position:
      {
        lng: -77.0286111,
        lat: -12.0200389
      },
      title: 'Estación EDUARDO DIBOS ',

    },
    {
      position:
      {
        lng: -77.0367889,
        lat: -12.0451389
      },
      title: 'Estación HUANCAVELICA 306',

    },
    {
      position:
      {
        lng: -77.0285388,
        lat: -12.0261492
      },
      title: 'Estación AGUILAR',

    },
    {
      position:
      {
        lng: -77.0297111,
        lat: -12.0345611
      },
      title: 'Estación G. REPUBLICANA',

    },
    {
      position:
      {
        lng: -77.03595,
        lat: -12.0075389
      },
      title: 'Estación FLOR DE AMANCAES / MONACO',

    },
    {
      position:
      {
        lng: -77.0345694,
        lat: -12.0921306
      },
      title: 'Estación JAVIER PRADO ',

    },
    {
      position:
      {
        lng: -77.0378389,
        lat: -12.0618
      },
      title: 'Estación HUANCAYO',

    },
    {
      position:
      {
        lng: -77.036,
        lat: -12.0440611
      },
      title: 'Estación ICA  ',

    },
    {
      position:
      {
        lng: -77.0254389,
        lat: -12.1351389
      },
      title: 'Estación LA PAZ / ARMENDARIZ',

    },
    {
      position:
      {
        lng: -77.0331806,
        lat: -12.0942611
      },
      title: 'Estación M. BAÑON',

    },
    {
      position:
      {
        lng: -77.0298,
        lat: -12.1268278
      },
      title: 'Estación LARCO',

    },
    {
      position:
      {
        lng: -77.0311889,
        lat: -12.1064111
      },
      title: 'Estación LOS ANGELES',

    },
    {
      position:
      {
        lng: -77.0340306,
        lat: -12.0260111
      },
      title: 'Estación AMANCAES',

    },
    {
      position:
      {
        lng: -77.0383889,
        lat: -12.0552806
      },
      title: 'Estación BOLIVIA',

    },
    {
      position:
      {
        lng: -77.0347806,
        lat: -12.0903611
      },
      title: 'Estación 2 DE MAYO 306',

    },
    {
      position:
      {
        lng: -77.0308194,
        lat: -12.1086694
      },
      title: 'Estación ANDALUCIA',

    },
    {
      position:
      {
        lng: -77.03035,
        lat: -12.1114194
      },
      title: 'Estación AYACUCHO',

    },
    {
      position:
      {
        lng: -77.0299889,
        lat: -12.1135194
      },
      title: 'Estación ANGAMOS',

    },
    {
      position:
      {
        lng: -77.0293306,
        lat: -12.1177389
      },
      title: 'Estación 2 DE MAYO',

    },
    {
      position:
      {
        lng: -77.0311,
        lat: -12.1219694
      },
      title: 'Estación BERLIN',

    },
    {
      position:
      {
        lng: -77.0352889,
        lat: -12.07945
      },
      title: 'Estación M. SEGURA',

    },
    {
      position:
      {
        lng: -77.0329806,
        lat: -12.1252194
      },
      title: 'Estación 28 DE JULIO',

    },
    {
      position:
      {
        lng: -77.0320694,
        lat: -12.0999611
      },
      title: 'Estación LA HABANA',

    },
    {
      position:
      {
        lng: -77.0299611,
        lat: -12.1310611
      },
      title: 'Estación ARMENDARIZ / LARCOMAR',

    },
    {
      position:
      {
        lng: -77.0188306,
        lat: -12.1417889
      },
      title: 'Estación BALTA',

    },
    {
      position:
      {
        lng: -77.0223,
        lat: -12.1408806
      },
      title: 'Estación CENTENARIO',

    },
    {
      position:
      {
        lng: -77.03744,
        lat: -12.05701
      },
      title: 'Estación CAT REAL PLAZA CENTRO CÍVICO',

    },
    {
      position:
      {
        lng: -77.041945,
        lat: -12.017712
      },
      title: 'Estación CONDOMINIOS',

    },
    {
      position:
      {
        lng: -77.0416854,
        lat: -12.0184555
      },
      title: 'Estación CONDOMINIOS',

    },
    {
      position:
      {
        lng: -77.037017,
        lat: -12.023656
      },
      title: 'Estación MORRO DE ARICA',

    },
    {
      position:
      {
        lng: -77.036025,
        lat: -12.02476
      },
      title: 'Estación MORRO DE ARICA',

    },
    {
      position:
      {
        lng: -77.0266424,
        lat: -12.0240032
      },
      title: 'Estación AGUILAR',

    },
    {
      position:
      {
        lng: -77.0713279,
        lat: -12.0963481
      },
      title: 'Estación LA VIRGEN',

    }
  ];

  constructor() { }

  ngOnInit() {
    this.loadMap("vacio");
  }

  loadMap(movilizacion) {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');

    var latitud;
    var longitud;
    var alejamiento;

    switch (movilizacion) {
      case "tren":
        latitud = -12.006081;
        longitud = -77.005942;
        break;
      case "corredor":
        latitud = -12.0466889;
        longitud = -77.0375194;
        break;
      case "metropolitano":
        latitud = -11.9764442105681;
        longitud = -77.0605502746262;
        break;
      default:
        latitud = -12.006081;
        longitud = -77.0605502746262;
        break;
    }
    // create LatLng object
    const myLatLng = { lat: latitud, lng: longitud };
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
      if (movilizacion == "metropolitano") {
        this.renderMarkersMetropolitano();
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

  renderMarkersMetropolitano() {
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
