import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  model = [
    {
      category: 'Cocer',
      title: 'Te enseño a cocer si me enseñas a usar mi celular',
      image:
        'https://lanotapositiva.com/wp-content/uploads/2019/08/shutterstock_1026935038.jpg',
    },
    {
      category: 'Cocina',
      title: 'Te enseño a cocinar si me enseñas a andar en moto',
      image:
        'https://www.formulamoto.es/wp-content/uploads/2020/06/consejosmoto1-1.jpg.webp',
    },
    {
      category: 'Matematicas',
      title: 'Te enseño a integrar si me enseñas a tomar fotos',
      image:
        'https://capturetheatlas.com/wp-content/uploads/2020/04/Landscape-photography-gear.jpg',
    },
  ];
  constructor() {}
}
